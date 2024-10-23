ForgeEvents.onEvent($BlockEvent.FluidPlaceBlockEvent,event=>{
    global.fluidPlaceBlockEvent(event);
})

global.fluidPlaceBlockEvent = event =>{
    try {
        let block = event.getNewState().getBlock();
        event.setNewState(global.fluidCreateBlock(block.id));
    } catch (err) {
        console.error(err);
    }
}