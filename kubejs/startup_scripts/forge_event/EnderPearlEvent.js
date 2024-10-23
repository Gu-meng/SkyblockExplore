
ForgeEvents.onEvent($EnderPearlEvent,event=>{
    global.enderPearlEvent(event)
})

/**
 * 
 * @param {Internal.EntityTeleportEvent$EnderPearl_} e 
 */
global.enderPearlEvent = (e) =>{
    try{
        /**
         * @type {Internal.ServerPlayer_}
         */
        let player = e.getEntity();
        if (player instanceof $ServerPlayer){
            let {x,y,z} = player.getOnPos()
            let dimension = player.level.dimension.toString();
            let tick = player.level.levelData.gameTime
            let time = new Date().getTime().toString();
            player.give(Item.of("meng:return_pearl",{pos:{x:x,y:y,z:z},dimension:dimension,time:time,tick:tick}))
        }
    }catch(err){
        console.error(err);
    }
}
