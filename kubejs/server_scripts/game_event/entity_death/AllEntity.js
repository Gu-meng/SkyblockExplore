EntityEvents.death(event => {
    const entity = event.getEntity()
    const { x, y, z } = entity.getOnPos();

    if (y <= -32) {
        if (MengUtils.isPercent(0.05)) {
            // 先用summon代替等之后研究为什么nbt不能用，如果可以之后研究怎么生成从地下爬起来的监守者
            
            event.getServer().runCommandSilent(`summon minecraft:warden ${x+0.5} ${y+2.5} ${z+0.5}`);
        /*
            let warenSpawn = event.getLevel().createEntity("minecraft:warden")
            warenSpawn.setPos(x + 0.5, y + 1.5, z + 0.5)
            let nbt = warenSpawn.getNbt()
            // nbt.getCompound("Brain").getCompound("memories").put("minecraft:dig_cooldown",{ttl:1200});
            nbt.put("Brain",{
                memories:{
                   "minecraft:dig_cooldown":{
                        ttl:1200
                   } 
                }
            })
            warenSpawn.setNbt(nbt)
            console.log(warenSpawn.nbt);
            console.log(nbt);
            warenSpawn.spawn()
            */
        }
    }
})