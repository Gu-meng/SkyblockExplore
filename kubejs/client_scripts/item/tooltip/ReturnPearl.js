ItemEvents.tooltip(event=>{
    event.addAdvanced("meng:return_pearl",(item,advanced,text) =>{
        try{
            if (!item.hasNBT()) return
            let gt = Client.player.level.levelData.gameTime
            let tick = 20 * 5 - (gt - item.nbt.getLong("tick"));
            // let oldTime = parseInt(item.getNbt().getString("time"))
            // let newTime = new Date().getTime();
            // let deleteTime = (5 - Math.floor((newTime - oldTime) / 1000))
            let deleteTime = Math.floor(tick / 20);
            if (deleteTime < 0){
                text.add("该物品已失效无法使用")
                // if (!item.nbt.getBoolean("isDiscard")){
                //     Client.player.sendData("deleteItem",{time:oldTime.toString()})
                // }
            }else{
                text.add("剩余时间" + deleteTime)
            }
        }catch(err){}
    })
})