ForgeEvents.onEvent($NeighborNotifyEvent,event=>{
    global.NeighborNotifyEvent(event);
})

/**
 * 
 * @param {Internal.BlockEvent$NeighborNotifyEvent_} event 
 */
global.NeighborNotifyEvent = (event) =>{

    try{
        if (event.getState().isAir()){
            let {x,y,z} = event.pos
            event.getNotifiedSides().forEach(value=>{
                const {x:nx,y:ny,z:nz} = value;
                const block = event.level.getBlockState(new BlockPos(x+nx,y+ny,z+nz));
                if (block.isAir()) return;
                if (block.tags.toArray().find(value => value == $BlockTags.create("meng:budding")) == undefined) return;
                event.level.destroyBlock(new BlockPos(x+nx,y+ny,z+nz),true);
            })
        }
    }catch(err){console.warn(err)}
     
}