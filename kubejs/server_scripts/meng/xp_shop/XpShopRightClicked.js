/**
 * 检查商店是否有绑定正确的箱子且在同一纬度下
 * @param {Internal.ItemStack_} item 箱子物品
 * @param {*} level 世界
 * @returns 返回箱子block
 */
function detectionChest(item, level, player) {
    let chest, block, inLevel;
    try {
        chest = item.getNbt().get("chest")
        let pos = chest.get("pos");
        inLevel = level.dimension.getPath() != chest.get("level")
        block = level.getBlock(pos.getInt("x"), pos.getInt("y"), pos.getInt("z"))
        if (!inLevel && (block.id == "minecraft:air" || !chest.isExist)) {
            item.setNbt({
                chest: {
                    isExist: false
                }
            })
            block = null
        }

    } catch (err) { chest = null }
    if (chest == null || block == null) {
        player.tell(Text.translate("tell.meng.chest_null"))
        return null;
    }
    if (inLevel) {
        player.tell(Text.translate("tell.meng.chest_level_null"))
        return null
    }

    return block;
}

/**
 * 存入快递箱
 * @param {*} block 箱子方块
 * @param {XpShopArrHelper} arrHelper 
 */
function expressBox(block, arrHelper) {
    /**
     * @type {Internal.ChestBlockEntity}
     */
    let cbe = block.getEntity();
    arrHelper.getItems().forEach(item => {
        for (let j = 0; j < 27; j++) {
            if (cbe.getItem(j).id == item.id) {
                if (cbe.getItem(j).hasNBT()){
                    if (cbe.getItem(j).nbt.equals(item.nbt)){
                        cbe.getItem(j).count += item.count;
                        break;
                    }
                }else{
                    cbe.getItem(j).count += item.count;
                    break;
                }
            } else if (cbe.getItem(j).id == 'minecraft:air') {
                cbe.setItem(j, item)
                break;
            }
            if (j == 26) {
                player.tell(Text.translate("tell.meng.chest_full"))
                let spawnItem = e.level.createEntity("item")
                spawnItem.item = item
                spawnItem.pos = e.getBlock().getUp().getPos()
                spawnItem.spawn()
            }
        }
    })
}

function setItemDisplay(itemId, textTranslate) {
    const text = Text.translate(textTranslate).getString()
    return Item.of(itemId, {
        display: {
            Name: '{"text" : "' + text + '","italic" : "false"}'
        },
        tipxp: false
    });
}

function buyXpUpdate(number, color) {
    const amountRequired = Text.translate("item.display.meng.xp_shop.amount_required", number).getString()
    let buyXp = Item.of('mob_grinding_utils:solid_xp_baby', {
        display: {
            Name: '{"text" : "' + amountRequired + '","italic" : "false","color":"' + color + '"}'
        }
    })
    return buyXp;
}

function synchronizationShopList(server) {
    let newList = [];
    synchronizationShop(XpShopPersistentData(server))

    shopItemList.forEach(value => {
        newList.push(value.item)
    })
    return newList;
}

// 下面的狮山属于是只有上帝能看懂了
ItemEvents.firstRightClicked("meng:xp_shop", event => {
    const server = event.getServer()

    /**
     * @type {Internal.ServerPlayer}
     */
    const player = event.getPlayer();
    if (player.isShiftKeyDown()) return;

    let xp = player.getXp();
    const level = event.getLevel();
    let item = event.getItem()
    let block = detectionChest(item, level, player);

    if (block == null) return

    let rd = ReplenishmentDay(server)
    if (rd.isSyncDay(level)) {
        rd.updateReplenishDay(level);
        replenishment(server);
    }

    let shopItems = synchronizationShopList(server);

    let ppd = player.getPersistentData()
    ppd.putBoolean("isAddShop", true)
    //记录是否支付
    ppd.putBoolean("isPay", false);
    let arr = []
    let arrHelper = new XpShopArrHelper([]);

    let xpShopItem = setItemDisplay('meng:xp_shop', "item.display.meng.xp_shop.shopping_trolley")

    if (xp < 50) {
        player.tell(Text.translate("tell.meng.not_enough_xp"))
        return;
    }

    player.setXp(xp - 50);
    player.openChestGUI(Text.translate("gui.title.meng.player.xp_shop"), 8, gui => {
        let SumXp = 0;
        for (let index = 0; index < shopItems.length; index++) {
            // 展示所有的物品
            gui.slot(index, 0, slot => {
                slot.setItem(shopItems[index])
                //给物品添加左键事件（添加购买）
                slot.setLeftClicked(() => {
                    let iitem = slot.getItem();
                    if (iitem.is("air")) return;
                    let nbt = iitem.nbt;
                    let xxp = nbt.getInt("buyXp")
                    let iid = nbt.getString("identificationId");
                    if (ppd.getBoolean("isAddShop")) {
                        if (!arrHelper.itemIsEmpty(iid)) {
                            arrHelper.addItem(iitem, iid, 1, xxp, nbt)
                        } else {
                            arrHelper.updateItem(iid, 1);
                        }
                        //计算所需总的经验
                        SumXp += xxp;

                        let c = deleteXpShop(server, iid, 1);

                        ppd.put("tempItem", arrHelper.getItemList());

                        for (let index = 0; index < shopItems.length; index++) {
                            gui.slot(index, 0, sslot => {
                                sslot.setItem("air")
                            })
                        }

                        shopItems = synchronizationShopList(server);

                        //刷新购物车
                        for (let index = 0; index < shopItems.length; index++) {
                            gui.slot(index, 0, sslot => {
                                sslot.setItem(shopItems[index])
                            })
                        }

                        gui.slot(4, 5, slott => {
                            slott.getItem().setCount(arrHelper.getAllCount());
                        })

                        gui.slot(5, 5, slot => {
                            slot.setItem(buyXpUpdate(SumXp, gui.player.xp > SumXp ? "white" : "red"))
                        })
                    }
                })
            })
        }
        // 展示当前经验
        gui.slot(3, 5, slot => {
            let xxp = gui.player.xp
            const xpText = Text.translate("item.display.meng.xp_shop.xp", xxp).getString()
            let currentXp = Item.of('minecraft:experience_bottle', {
                display: {
                    Name: '{"text" : "' + xpText + '","italic" : "false"}'
                }
            })
            slot.setItem(currentXp)
        })
        // 展示购买所需经验
        gui.slot(5, 5, slot => {
            slot.setItem(buyXpUpdate(SumXp, "white"))
        })
        // 购物车
        gui.slot(4, 5, slot => {
            slot.setItem(xpShopItem)
            //打开购物车界面
            slot.setLeftClicked(() => {
                // 给购物车的位置设置为空（避免重复打开购物车）
                slot.setItem("air")

                // let billXp = 0;
                ppd.putBoolean("isAddShop", false)
                //先将gui所有展示物品清空
                for (let index = 0; index < shopItems.length + 1; index++) {
                    gui.slot(index, 0, sslot => {
                        sslot.setItem("air")
                    })
                }
                // 展示购物车物品
                for (let i = 0; i < arrHelper.getArrLength(); i++) {
                    // billXp += arr[i].xp
                    gui.slot(i, 0, slott => {
                        slott.setItem(arrHelper.getIndexItem(i))
                        // 后续这里可以写上在购物车里进行去除
                    })
                }
                // 购物车界面的结算
                gui.slot(8, 5, slott => {
                    let xxp = gui.player.xp
                    let billItem = setItemDisplay('create:clipboard', "item.display.meng.xp_shop.settle_accounts")
                    slott.setItem(billItem)
                    // 结算处理逻辑代码
                    slott.setLeftClicked(() => {
                        // if (arr.length > 0) {
                        if (arrHelper.getArrLength() > 0) {
                            if (xxp > SumXp) {
                                xxp -= SumXp;
                                expressBox(block, arrHelper);
                                player.tell(Text.translate("tell.meng.chest_putin"))
                                player.closeMenu()
                                ppd.putBoolean("isPay", true);
                            } else {
                                player.tell(Text.translate("tell.meng.xp_shop.no_xp_buy"))
                            }

                        } else {
                            player.tell(Text.translate("tell.meng.xp_shop.null_buy"))
                        }
                    })

                })
                // 购物车界面的返回到商品购买界面
                gui.slot(0, 5, slott => {
                    let backItem = setItemDisplay('create:brass_hand', "item.display.meng.xp_shop.back")
                    slott.setItem(backItem)
                    ppd.putBoolean("isAddShop", true)
                    slott.setLeftClicked(() => {
                        let il = shopItems.length >= arrHelper.getArrLength() ? shopItems.length : arrHelper.getArrLength();
                        for (let index = 0; index < il + 1; index++) {
                            gui.slot(index, 0, sslot => {
                                sslot.setItem(shopItems[index])
                            })
                        }

                        gui.slot(4, 5, sslot => {
                            sslot.setItem(xpShopItem)
                        })
                        // 隐藏返回
                        gui.slot(0, 5, sslot => {
                            sslot.setItem("air")
                        })
                        // 隐藏结算
                        gui.slot(8, 5, sslot => {
                            sslot.setItem("air")
                        })
                    })
                })
            })
        })
    })
})

/**
 * 
 * @param {Array} list 
 */
function XpShopArrHelper(list) {
    this.itemList = list;
    this.addItem = (item, identificationId, count, xp, nbt) => {
        this.itemList.push({
            item: item,
            identificationId: identificationId,
            xp: xp,
            count: count,
            nbt: nbt
        })
    }

    this.getItem = (identificationId) => {
        let v = this.getItemList().find(value => value.identificationId == identificationId);
        return this.getItemStack(v,true);
    }

    this.getItemStack = (value,isDeleteIId) => {
         /**
         * @type {Internal.OrderedCompoundTag_}
         */
        let nbt = value.nbt
        nbt.remove("buyXp")
        nbt.remove("remaining")
        if (isDeleteIId) nbt.remove("identificationId")
        return Item.of(value.item.id, value.count, nbt);
    }

    this.getAllCount = () => {
        let j = 0;
        this.getItemList().forEach(value=>{
            j += value.count
        })
        return j;
    }

    this.itemIsEmpty = (identificationId) => {
        if (identificationId == undefined) return false;
        let v = this.getItemList().find(value => value.identificationId == identificationId);
        return v == undefined ? false : true;
    }

    this.updateItem = (identificationId, addCount) => {
        let v = this.getItemList().find(value => value.identificationId == identificationId);
        v.count += addCount;
    }

    this.getItemList = () => {
        return this.itemList;
    }

    this.getItems = () => {
        let itemList = [];
        this.itemList.forEach(value=>{
            itemList.push(this.getItem(value.identificationId))
        })
        return itemList;
    }

    this.getArrLength = () => {
        return this.getItemList().length;
    }

    this.getIndexItem = (index, isDeleteIId) => {
        const value = this.getItemList()[index]
        return this.getItemStack(value,isDeleteIId)
    }
}