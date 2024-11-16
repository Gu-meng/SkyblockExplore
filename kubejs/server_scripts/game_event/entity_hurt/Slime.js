EntityEvents.hurt("slime", event => {
    let entity = event.getEntity();
    if (entity.hurtTime == 9 && MengUtils.isPercent(MobSpwanConfig.magmaCube.spawn)) {
        let damageTyep = event.getSource().getType();
        if (damageTyep == "hotFloor" || 
            damageTyep == "onFire" || 
            damageTyep == "inFire" ||
            damageTyep == "lava") {
            /**
             * @type {Internal.MagmaCube}
             */
            let spawnEntity = event.getLevel().createEntity("magma_cube");
            spawnEntity.setPos(entity.getBlock().getPos());
            spawnEntity.setSize(entity.getNbt().getInt("Size") + 1, true)
            entity.remove("discarded");
            spawnEntity.spawn();
        }
    }

})