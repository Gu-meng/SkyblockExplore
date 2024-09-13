ServerEvents.recipes(event => {
    let removeIds = [
        "create:crafting/kinetics/mechanical_drill",
        "create:crafting/kinetics/mechanical_saw",
        "create:crafting/kinetics/mechanical_harvester",
        "create:crafting/kinetics/fluid_pipe",
        "create:crafting/kinetics/fluid_pipe_vertical",
        "create:crafting/schematics/schematicannon",
        "createhalitosis:halitosis/cobblestone"
    ]
    removeIds.forEach(value => {
        event.remove({ id: value })
    })

})