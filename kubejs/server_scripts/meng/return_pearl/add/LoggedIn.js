PlayerEvents.loggedIn(event => {
    let inv = event.player.getInventory();
    inv.getAllItems().forEach(item => {
        if (item.id == "meng:return_pearl") {
            let tick = item.getNbt().getLong("tick")
            let time = item.getNbt().getString("time");
            let timeTick = event.level.levelData.gameTime - tick;
            
            if (timeTick >= 20 * 5) {
                item.count--;
            } else {
                returnPearlScheduleTick(event.server,timeTick,time,event.player)
            }
        }
    })
})