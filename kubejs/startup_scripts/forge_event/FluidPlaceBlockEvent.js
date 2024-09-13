let $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent")
ForgeEvents.onEvent($BlockEvent.FluidPlaceBlockEvent,e=>{
    let block = e.getNewState().getBlock().id;
    if (block == "minecraft:stone"){
        e.setNewState(Block.getBlock('minecraft:netherrack').defaultBlockState());
    }else if (block == "minecraft:cobblestone"){
        e.setNewState(Block.getBlock('meng:dirty_cobblestone').defaultBlockState());
    }
})