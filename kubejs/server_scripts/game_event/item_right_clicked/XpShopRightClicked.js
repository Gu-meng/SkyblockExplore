global.shopItemList = [
    Item.of('meng:crushbone', { buyXp: 10 }),
    Item.of('minecraft:stone', { buyXp: 100 }),
    Item.of('minecraft:egg',{buyXp: 50 }),
    Item.of('meng:raffle_ticket',{buyXp:2000 })
]

const shopItems = global.shopItemList
ItemEvents.firstRightClicked("meng:xp_shop", event => {
    /**
     * @type {Internal.ServerPlayer}
     */
    const player = event.getPlayer();
    let xp = player.getXp();
    const level = event.getLevel();
    let ppd = player.getPersistentData()
    ppd.putBoolean("isAddShop", true)
    let arr = []
    const shoppingTrolley = Text.translate("item.display.meng.xp_shop.shopping_trolley").getString()
    let xpShopItem = Item.of('meng:xp_shop', {
        display: {
            Name: '{"text" : "' +shoppingTrolley + '","italic" : "false"}'
        },
        tipxp : false
    });

    function buyXpUpdate(number,color){
        const amountRequired = Text.translate("item.display.meng.xp_shop.amount_required",number).getString()
        let buyXp = Item.of('mob_grinding_utils:solid_xp_baby',{
            display: {
                Name: '{"text" : "'+ amountRequired + '","italic" : "false","color":"' + color + '"}'
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
            const xpText = Text.translate("item.display.meng.xp_shop.xp",xxp).getString()
            let currentXp = Item.of('minecraft:experience_bottle',{
                display: {
                    Name: '{"text" : "' + xpText + '","italic" : "false"}'
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
                slot.setItem("air")
                gui.slot(8, 5, slott => {
                    let xxp = gui.player.xp
                    const settleAccounts = Text.translate("item.display.meng.xp_shop.settle_accounts").getString()
                    let billItem = Item.of('create:clipboard', {
                        display: {
                            Name: '{"text" : "'+settleAccounts+'","italic" : "false"}'
                        }
                    })
                    slott.setItem(billItem)
                    slott.setLeftClicked(() => {
                        if (arr.length > 0){
                            if (gui.player.xp > SumXp){
                                gui.player.xp-=SumXp;
                                player.tell(Text.translate("tell.meng.xp_shop.expressage"))
                                // Utils.server.scheduleInTicks(20*5,()=>{
                                    arr.forEach(value=>{
                                        let ei = level.createEntity("item");
                                        ei.x = 5;
                                        ei.y = 128;
                                        ei.z = 5;
                                        ei.item = Item.of(value.item,value.count);
                                        ei.glowing = true;
                                        ei.spawn();
                                        console.log(ei);
                                    })
                                player.closeMenu()
                                // })
                            }else{
                                player.tell(Text.translate("tell.meng.xp_shop.no_xp_buy"))
                            }
                        }else{
                            player.tell(Text.translate("tell.meng.xp_shop.null_buy"))
                        }
                    })
                })
                gui.slot(0, 5, slott => {
                    const backText = Text.translate("item.display.meng.xp_shop.back").getString()
                    let backItem = Item.of('create:brass_hand', {
                        display: {
                            Name: '{"text" : "'+backText+'","italic" : "false"}'
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