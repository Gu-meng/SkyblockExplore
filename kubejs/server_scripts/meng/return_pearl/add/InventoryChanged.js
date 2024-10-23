PlayerEvents.inventoryChanged("meng:return_pearl",event=>{
    let item = event.item;
    let player = event.player
    if (item.hasNBT()){
        let time = item.nbt.getString("time")
        let tick = item.nbt.getLong("tick")
        let timeTick = event.level.levelData.gameTime - tick;
        returnPearlScheduleTick(event.server,timeTick,time,player);
    }
})