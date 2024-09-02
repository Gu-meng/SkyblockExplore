function entityDropPainfulTears(entity,level,server,type){
    if (type != "hotFloor") return
    if (entity.hurtTime == 9) {

        let itemLoot = server
            .getLootData()
            .getLootTable("meng:painful_tears")
            .getRandomItems(
                new $LootParams(level)
                    .create($LootContextParamSets.EMPTY)
            )[0];

        if (itemLoot == undefined) return;

        let { x, y, z } = entity.onPos
        let spawnEntity = level.createEntity("item")
        spawnEntity.item = itemLoot
        spawnEntity.setPos(x + 0.5, y + 1.2, z + 0.5)
        spawnEntity.spawn()
        console.log(itemLoot);
    }
}