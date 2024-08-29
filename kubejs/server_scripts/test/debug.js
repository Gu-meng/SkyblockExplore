
LevelEvents.tick(e=>{
    if (!debugConfig.isDebug) return
    e.getLevel().getEntities().forEach(en=>{
        if (en.type != "minecraft:item") return
        en.customNameVisible = true;
        en.customName = en.getUuid();
    })
})