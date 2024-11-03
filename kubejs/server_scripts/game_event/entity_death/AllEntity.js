EntityEvents.death(event => {
    const entity = event.getEntity()
    const onPos = entity.getOnPos();
    const { x, y, z } = onPos;

    if (y <= MobSpwanConfig.warden.y) {
        if (MengUtils.isPercent(MobSpwanConfig.warden.spawn)) {
            event.getServer().runCommandSilent(`summon minecraft:warden ${x + 0.5} ${y + 2.5} ${z + 0.5}`);
        }
    }

    if (event.getLevel().getBlock(onPos).id == "minecraft:sand") {
        event.getLevel().setBlockAndUpdate(onPos, Block.getBlock('minecraft:soul_sand').defaultBlockState())
    }
})