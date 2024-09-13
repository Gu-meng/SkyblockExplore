EntityEvents.hurt("skeleton", event => {
    let entity = event.getEntity();
    if (event.getSource().getType() != "wither") return
    if (entity.hurtTime == 9 && MengUtils.isPercent(0.1)) {
        let spawnEntity = event.getLevel().createEntity("wither_skeleton");
        spawnEntity.setPos(entity.getBlock().getPos());
        entity.remove("discarded");
        spawnEntity.spawn();
    }
})