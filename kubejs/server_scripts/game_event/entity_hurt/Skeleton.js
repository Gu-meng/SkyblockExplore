EntityEvents.hurt("skeleton", event => {
    let entity = event.getEntity();
    if (event.getSource().getType() != "wither") return
    if (entity.hurtTime == 9 && MengUtils.isPercent(MobSpwanConfig.witherSkeleton.spawn)) {
        let spawnEntity = event.getLevel().createEntity("wither_skeleton");
        spawnEntity.setPos(entity.getBlock().getPos());
        entity.remove("discarded");
        spawnEntity.spawn();
    }
})