let $EntityLeaveLevelEvent = Java.loadClass("net.minecraftforge.event.entity.EntityLeaveLevelEvent")

ForgeEvents.onEvent($EntityLeaveLevelEvent, e => {
    global.EntityLeaveLevelEvent(e)
})
/**
 * 
 * @param {Internal.EntityLeaveLevelEvent} e 
 */
global.EntityLeaveLevelEvent = (e) => {
    if ((!e.getLevel().isClientSide()) &&
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
            let entityId = itemEntity.getItem().getId()
            let { x, y, z } = itemEntity.onPos
            let serverLevel = Utils.server.getLevel(e.getLevel().getDimension())
            let spawnEntity;
            let count = itemEntity.getItem().getCount()
            for (let i = 0; i < count; i++) {
                switch (entityId) {
                    case "minecraft:egg":
                        spawnEntity = serverLevel.createEntity("minecraft:blaze")
    
                        break;
                    case 'meng:painful_tears':
                        spawnEntity = serverLevel.createEntity("minecraft:ghast")
                        break;
                    default:
                        spawnEntity = undefined
                }
                if (spawnEntity == undefined) return
                spawnEntity.setPos(x + 0.5, y + 1.5, z + 0.5)
                spawnEntity.spawn()
            }
            
            
            
            
            // spawnEntity.spawn()
        }
    }
}