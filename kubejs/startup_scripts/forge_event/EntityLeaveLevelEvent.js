let $EntityLeaveLevelEvent = Java.loadClass("net.minecraftforge.event.entity.EntityLeaveLevelEvent")

ForgeEvents.onEvent($EntityLeaveLevelEvent, e => {
    global.EntityLeaveLevelEvent(e)
})
/**
 * 
 * @param {Internal.EntityLeaveLevelEvent} e 
 */
global.EntityLeaveLevelEvent = (e) => {
    if (e.getLevel().isClientSide() &&
        e.getEntity().getType() == "minecraft:item") {
        /**
         * @type {Internal.ItemEntity}
         */
        let itemEntity = e.getEntity();
        /**
         * @type {Internal.BlockState}
         */
        let block = e.getLevel().getBlockState(itemEntity.onPos)
        if (block.getBlock().getId() == "minecraft:lava") {
            global.spawnItemEntity(e.getLevel(), itemEntity.onPos, Item.of('meng:raffle_ticket', itemEntity.item.getCount()))
        }
    }
}


/**
 * 
 * @param {Internal.Level} level 
 * @param {Internal.ItemStack} itemStack 
 */
global.spawnItemEntity = (level, pos, itemStack) => {
    let { x, y, z } = pos
    let serverLevel = Utils.server.getLevel(level.getDimension())
    let itemEntity = serverLevel.createEntity("minecraft:item")
    itemEntity.setPos(x + 1.5, y + 2, z + 0.5)

    itemEntity.item = itemStack.id
    itemEntity.item.setCount(itemStack.count)

    itemEntity.spawn()

}