global.shopItemList = [
    Item.of('meng:crushbone', { buyXp: 10 }),
    Item.of("cobblestone", { buyXp: 100 }),
]

const shopItems = global.shopItemList
ItemEvents.rightClicked("meng:xp_shop", event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    const player = event.getPlayer();
    let xp = player.getXp();
    const level = event.getLevel();
    let ppd = player.getPersistentData()
    ppd.putBoolean("isAddShop", true)
    let arr = []

    let xpShopItem = Item.of('meng:xp_shop', {
        display: {
            Name: '{"text" : "购物车","italic" : "false"}'
        },
        tipxp : false
    });

    function buyXpUpdate(number,color){
        let buyXp = Item.of('mob_grinding_utils:solid_xp_baby',{
            display: {
                Name: '{"text" : "购买所需xp：'+ number + '","italic" : "false","color":"' + color + '"}'
            }
        })
        return buyXp;
    }
    

    if (xp < 50){
        player.tell(Text.translate("tell.meng.not_enough_xp"))
        return;
    }

    player.setXp(xp - 50); 
    player.openChestGUI(Text.translate("gui.title.meng.player.xp_shop"), 8, gui => {
        let SumXp = 0;
        for (let index = 0; index < shopItems.length; index++) {
            gui.slot(index, 0, slot => {
                slot.setItem(shopItems[index])
                slot.setLeftClicked(() => {
                    if (ppd.getBoolean("isAddShop")) {
                        if (arr.length < 0) {
                            arr.push({
                                item: slot.getItem().getId(),
                                xp: slot.getItem().getNbt().getInt("buyXp"),
                                count: 1,
                            })
                        } else {
                            let t = 0;
                            for (let i = 0; i < arr.length; i++) {
                                if (arr[i].item == slot.getItem().getId()) {
                                    arr[i].count += 1;
                                    t = 1;
                                    break;
                                }
                            }
                            if (t == 0) {
                                arr.push({
                                    item: slot.getItem().getId(),
                                    xp: slot.getItem().getNbt().getInt("buyXp"),
                                    count: 1,
                                })
                            }
                        }
                        SumXp += slot.getItem().getNbt().getInt("buyXp")
                        gui.slot(4, 5, slott => {
                            let c = 0
                            arr.forEach(value => {
                                c += value.count;
                            })
                            slott.getItem().setCount(c);
                        })

                        gui.slot(5,5,slot=>{
                            slot.setItem(buyXpUpdate(SumXp,gui.player.xp > SumXp ? "white" : "red"))
                        })
                    }
                })
            })
        }
        gui.slot(3,5,slot=>{
            let xxp = gui.player.xp
            let currentXp = Item.of('minecraft:experience_bottle',{
                display: {
                    Name: '{"text" : "当前经验：' + xxp + '","italic" : "false"}'
                }
            })
            slot.setItem(currentXp)
        })

        gui.slot(5,5,slot=>{
            slot.setItem(buyXpUpdate(SumXp,"white"))
        })

        gui.slot(4, 5, slot => {
            slot.setItem(xpShopItem)
            slot.setLeftClicked(() => {
                let billXp = 0;
                ppd.putBoolean("isAddShop", false)
                for (let index = 0; index < shopItems.length; index++) {
                    gui.slot(index, 0, sslot => {
                        sslot.setItem("air")
                    })
                }
                for (let i = 0; i < arr.length; i++) {
                    billXp += arr[i].xp
                    gui.slot(i, 0, slott => {
                        slott.setItem(Item.of(arr[i].item, arr[i].count))
                    })
                }
                gui.title = Text.translate("gui.title.meng.player.xp.bill", billXp)
                slot.setItem("air")
                gui.slot(8, 5, slott => {
                    let billItem = Item.of('create:clipboard', {
                        display: {
                            Name: '{"text" : "结算","italic" : "false"}'
                        }
                    })
                    slott.setItem(billItem)
                    slott.setLeftClicked(() => {
                        if (arr.length > 0){
                            if (gui.player.xp > SumXp){
                                gui.player.xp-=SumXp;
                                player.tell("物品快递将会在五秒内从地图中间位置送达，请查收")
                                // Utils.server.scheduleInTicks(20*5,()=>{
                                    arr.forEach(value=>{
                                        let ei = level.createEntity("item");
                                        ei.x = 0;
                                        ei.y = 0;
                                        ei.z = 0;
                                        ei.item = Item.of(value.item,value.count);
                                        ei.glowing = true;
                                        ei.spawn();
                                    })
                                player.closeMenu()
                                // })
                            }else{
                                player.tell("您的经验不支持您购买这些物品，请重新选择后再进行结算")
                            }
                        }else{
                            player.tell("您的购物车为空，请选购后再进行结算")
                        }
                    })
                })
                gui.slot(0, 5, slott => {
                    let backItem = Item.of('create:brass_hand', {
                        display: {
                            Name: '{"text" : "返回","italic" : "false"}'
                        },
                        tipxp : false
                    })
                    slott.setItem(backItem)
                    ppd.putBoolean("isAddShop", true)
                    slott.setLeftClicked(() => {
                        for (let index = 0; index < shopItems.length; index++) {
                            gui.slot(index, 0, sslot => {
                                sslot.setItem(shopItems[index])
                            })
                        }

                        gui.slot(4, 5, sslot => {
                            sslot.setItem(xpShopItem)
                        })

                        gui.slot(0, 5, sslot => {
                            sslot.setItem("air")
                        })

                        gui.slot(8, 5, sslot => {
                            sslot.setItem("air")
                        })
                    })
                })
            })
        })
    })
})