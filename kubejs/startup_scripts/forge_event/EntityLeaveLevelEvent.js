/*
let $EntityLeaveLevelEvent = Java.loadClass("net.minecraftforge.event.entity.EntityLeaveLevelEvent")

ForgeEvents.onEvent($EntityLeaveLevelEvent, e => {
    try {
        global.EntityLeaveLevelEvent(e)
    } catch (err) {
        console.error(err);
    }
})
*/
global.EntityLavaRecipe = [
    {
        inputItem: "minecraft:egg",
        output: {
            type: "entity",
            value: "minecraft:blaze",
            entityEgg: 'minecraft:blaze_spawn_egg'
        },
        display: {
            renderScale: 40,
            x: 1.5
        }
    },
    {
        inputItem: "meng:painful_tears",
        output: {
            type: "entity",
            value: "minecraft:ghast",
            entityEgg: 'minecraft:ghast_spawn_egg'
        },
        display: {
            renderScale: 10,
            x: 5.8
        }
    }
]

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
            let spawnEntity = undefined;
            let count = itemEntity.getItem().getCount()
            for (let i = 0; i < count; i++) {
                global.EntityLavaRecipe.forEach(value => {
                    if (entityId == value.inputItem) {
                        if (value.output.type == "entity") {
                            spawnEntity = serverLevel.createEntity(value.output.value)
                        }
                    }
                })
                if (spawnEntity == undefined) return
                spawnEntity.setPos(x + 0.5, y + 1.5, z + 0.5)
                spawnEntity.spawn()
            }
        }

        // spawnEntity.spawn()

    }
}