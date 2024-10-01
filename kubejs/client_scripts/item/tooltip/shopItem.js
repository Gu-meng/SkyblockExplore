ItemEvents.tooltip(event=>{
    global.shopItemList.forEach(value => {
        event.addAdvanced(value.id,(item,advanced,text) =>{
            if (item.getNbt() != undefined){
                let xp = item.getNbt().getInt("buyXp")
                if (xp != undefined && xp != null && xp != 0){
                    text.add(Text.translate("item.tooltip.meng.xp_shop.price",xp))
                }
            }
        })
    });

    event.addAdvanced('mob_grinding_utils:solid_xp_baby',(item,advanced,text) =>{
        if (item.getNbt() != undefined){
            if(!item.getNbt().getBoolean("tipxp")){
                if (item.getNbt().getBoolean("tipxp") != undefined && item.getNbt().getBoolean("tipxp") != null){
                    text.remove(1);
                }
            }
        }
    })

    event.addAdvanced('meng:xp_shop',(item,advanced,text) =>{
        text.add(Text.translate("item.tooltip.meng.xp_shop.1").gold())
        text.add(Text.translate("item.tooltip.meng.xp_shop.2",Client.player.xp).blue())
        if (item.getNbt() != undefined){
            if(!item.getNbt().getBoolean("tipxp")){
                if (item.getNbt().getBoolean("tipxp") != undefined && item.getNbt().getBoolean("tipxp") != null){
                    text.remove(1)
                }
            }
        }
    })
})