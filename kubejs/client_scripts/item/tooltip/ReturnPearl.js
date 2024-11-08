ItemEvents.tooltip(event=>{
    event.addAdvanced("meng:return_pearl",(item,advanced,text) =>{
        try{
            if (!item.hasNBT()) return
            let gt = Client.player.level.levelData.gameTime
            let tick = 20 * ReturnPearlConfig.deleteTime - (gt - item.nbt.getLong("tick"));
            let deleteTime = Math.floor(tick / 20);
            if (deleteTime < 0){
                text.add(Text.translate("item.tooltip.meng.return_pearl1"))
            }else{
                text.add(Text.translate("item.tooltip.meng.return_pearl2",deleteTime))
            }
        }catch(err){}
    })
})