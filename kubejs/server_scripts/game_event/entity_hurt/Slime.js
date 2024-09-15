EntityEvents.hurt("slime", event => {
    let entity = event.getEntity();
    if (event.getSource().getType() == "hotFloor" || event.getSource().getType() == "onFire"){
        if (entity.hurtTime == 9 && MengUtils.isPercent(0.3)) {
            /**
             * @type {Internal.MagmaCube}
             */
            let spawnEntity = event.getLevel().createEntity("magma_cube");
            spawnEntity.setPos(entity.getBlock().getPos());
            spawnEntity.setSize(entity.getNbt().getInt("Size")+1,true)
            entity.remove("discarded");
            spawnEntity.spawn();
        }
    }
    
})