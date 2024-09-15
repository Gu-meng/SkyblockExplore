EntityEvents.death(event => {
    const entity = event.getEntity()
    const { x, y, z } = entity.getOnPos();

    if (y <= -32) {
        if (MengUtils.isPercent(0.05)) {
            event.getServer().runCommandSilent(`summon minecraft:warden ${x + 0.5} ${y + 2.5} ${z + 0.5}`);
        }
    }
})