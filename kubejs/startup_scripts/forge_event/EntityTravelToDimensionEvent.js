ForgeEvents.onEvent($EntityTravelToDimensionEvent, event => {
    global.entityTravelToDimension(event);
})

const $ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")

/**
 * 
 * @param {Internal.EntityTravelToDimensionEvent} event 
 */
global.entityTravelToDimension = (event) => {
    let dimension = event.dimension;
    let key = dimension.getNamespace();
    let value = dimension.getPath();
    let entity = event.entity;
    let block = Utils.server.getLevel(entity.level.dimension).getBlock(entity.getOnPos())
    try {
        switch (key) {
            case "meng":
                event.setCanceled(true);
                switch (value) {
                    case "basic_transaction":

                        if (entity instanceof $ItemEntity) {
                            let inputItem = entity.item;
                            let outputItem = isRecipe(inputItem)
                            if (outputItem != null) {
                                if (outputItem.hasNBT()) {
                                    outputItem.nbt.merge({ isPortal: true })
                                } else {
                                    outputItem.setNbt({ isPortal: true });
                                }

                                block.popItem(outputItem)
                                entity.remove("discarded");
                            }
                        }
                        break;
                }

                break;
            case "minecraft":
                switch (value) {
                    case "the_nether":
                        event.setCanceled(true);
                        if (entity instanceof $ItemEntity) {
                            let inputItem = entity.item;
                            if (inputItem.id != "meng:nether_gem") return;
                            for (let i = 0; i < inputItem.count; i++) {
                                let outputItem = Utils.server
                                    .getLootData().getLootTable("meng:neter_portal")
                                    .getRandomItems(
                                        new $LootParams(entity.level)
                                            .create($LootContextParamSets.EMPTY)
                                    )[0];
                                if (outputItem.hasNBT()) {
                                    outputItem.nbt.merge({ isPortal: true })
                                } else {
                                    outputItem.setNbt({ isPortal: true });
                                }
                                block.popItem(outputItem)
                            }
                            entity.remove("discarded");
                        }
                        break;
                }
                break;
        }
    } catch (e) {
        console.error(e);
    }
}

let recipe = [
    {
        input: "diamond",
        output: "emerald"
    },
    {
        input: "emerald",
        output: "diamond"
    }
]

/**
 * 
 * @param {Internal.ItemStack_} inputItem 
 */
function isRecipe(inputItem) {

    if (inputItem.hasNBT()) {
        let nbt = inputItem.nbt;
        if (nbt.getBoolean("isPortal")) {
            return null;
        }
    }

    let obj = recipe.find(value => Item.of(value.input).is(inputItem))
    if (obj == undefined) return null;
    return Item.of(obj.output);
}