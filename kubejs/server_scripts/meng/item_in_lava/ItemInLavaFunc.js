let lavaSpawned = {}

EntityEvents.spawned("item", event => {
    let itemEntity = event.getEntity()
    global.EntityLavaRecipe.forEach(value => {
        if (itemEntity.getItem().id == value.inputItem) {
            itemEntity.pickUpDelay = 100;
            lavaSpawned[itemEntity.uuid] = {
                dimension: event.getLevel().getDimension(),
                outputEntity: value.output.value
            }
        }
    })
})

LevelEvents.tick(event => {
    // 根据情况可以选择打开或关闭 做了一系列的防止检测过多而导致的压力
    // if (event.getServer().getTickCount() % 2 != 0) return;
    if (Object.keys(lavaSpawned).length == 0) return
    let level = event.getLevel();
    for (let key in lavaSpawned) {
        let value = lavaSpawned[key]
        if (value.dimension == level.getDimension()) {
            try {        
                let itemEntity = level.getEntity(key);
                if (itemEntity.age >= 300){
                    delete lavaSpawned[key]
                    return
                } else if (itemEntity.onGround()){
                    delete lavaSpawned[key]
                    return
                }
                if (itemEntity.onFire) {
                    let block = level.getBlock(itemEntity.getOnPos())
                    if (block.getId() == "minecraft:lava" ||
                        block.getId() == "minecraft:lava_cauldron") {
                        for (let index = 0; index < itemEntity.item.count; index++) {
                            let entitySpawn = level.createEntity(value.outputEntity)
                            entitySpawn.setPos(itemEntity.getOnPos())
                            entitySpawn.spawn();
                        }
                    }
                    delete lavaSpawned[key]
                }
            } catch (e) {
                // console.warn("出现这个问题是正常的,说明物品被消灭掉没被检测到又或者自然消失和被玩家捡起了\n" + e);
                delete lavaSpawned[key]
            }
        }
    }
})