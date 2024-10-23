ItemEvents.dropped("meng:return_pearl",event=>{
    // event.item.nbt.merge({isDiscard:true})
    let playerName = event.player.username;
    let time = event.item.nbt.getString("time");
    ReturnPearl[playerName][time].clear();
    delete ReturnPearl[playerName][time];
})