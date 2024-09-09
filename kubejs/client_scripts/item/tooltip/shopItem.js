ItemEvents.tooltip(event=>{
    global.shopItemList.forEach(value => {
        event.addAdvanced(value.id,(item,advanced,text) =>{
            if (item.getNbt() != undefined){
                let xp = item.getNbt().getInt("buyXp")
                if (xp != undefined && xp != null && xp != 0){
                    text.add("商品价格为：" + xp)
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
        text.add(1,Text.gold("每次使用都会收取50xp作为入场费"))
        text.add(2,Text.blue("当前拥有xp：" + Client.player.xp))
        if (item.getNbt() != undefined){
            if(!item.getNbt().getBoolean("tipxp")){
                if (item.getNbt().getBoolean("tipxp") != undefined && item.getNbt().getBoolean("tipxp") != null){
                    text.remove(1)
                }
            }
        }
    })
})