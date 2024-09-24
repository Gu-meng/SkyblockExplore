const $PlayerInteractEvent = Java.loadClass("net.minecraftforge.event.entity.player.PlayerInteractEvent")

ForgeEvents.onEvent($PlayerInteractEvent.EntityInteract, event => {
    global.entityInteract(event)
})
/**
 * 
 * @param {Internal.PlayerInteractEvent$EntityInteract} event 
 */
global.entityInteract = event => {
    try {
        if (event.getSide().isServer() && event.getHand() == "MAIN_HAND") {
            let item = event.getItemStack();
            let entityTarget = event.getTarget();
            if (entityTarget.encodeId == "minecraft:sheep" && item.id == 'meng:catalyst_goat') {
                if (entityTarget.baby) return
                entityTarget.potionEffects.add("meng:mob_alter",20*30)
                item.count--;
                Utils.server.scheduleInTicks(20 * 20,()=>{
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
    } catch (err) {
        console.error(err);
    }
}