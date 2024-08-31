let $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent")
ForgeEvents.onEvent($BlockEvent.FluidPlaceBlockEvent,e=>{
    let block = e.getNewState().getBlock().id;
    if (block == "minecraft:stone"){
        e.setNewState(Block.getBlock('minecraft:netherrack').defaultBlockState());
    }
})