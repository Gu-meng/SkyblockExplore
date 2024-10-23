ForgeEvents.onEvent($PipeCollisionEvent.Spill, event => {
    global.handlePipeSpillCollisionFallback(event)
})

global.handlePipeSpillCollisionFallback = event => {
    try {
        let block = event.getState().block;
        event.setState(global.fluidCreateBlock(block.id))
    } catch (err) {
        console.error(err);
    }
}