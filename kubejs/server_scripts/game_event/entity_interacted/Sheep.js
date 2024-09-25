ItemEvents.entityInteracted("meng:catalyst_goat",event=>{
    if (event.getHand() == "MAIN_HAND") {
        let item = event.getItem();
        let entityTarget = event.getTarget();
        if (entityTarget.encodeId == "minecraft:sheep") {
            if (entityTarget.baby) return;
            entityTarget.potionEffects.add("meng:mob_alter",20*30);
            item.count--;
            event.server.scheduleInTicks(20 * 20,()=>{
                if (entityTarget.isAlive()){
                    let pos = entityTarget.position();
                    entityTarget.remove("discarded");
                    let goatSpawn = event.getLevel().createEntity("minecraft:goat")
                    goatSpawn.pos = pos;
                    goatSpawn.spawn();
                }
            })   
        }
    }
})