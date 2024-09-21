ServerEvents.recipes(event => {
    let removeIds = [
        "create:crafting/kinetics/mechanical_drill",
        "create:crafting/kinetics/mechanical_saw",
        "create:crafting/kinetics/mechanical_harvester",
        "create:crafting/kinetics/fluid_pipe",
        "create:crafting/kinetics/fluid_pipe_vertical",
        "create:crafting/schematics/schematicannon",
        "createhalitosis:halitosis/cobblestone",
        "create:smelting/iron_ingot_from_crushed",
        "create:smelting/gold_ingot_from_crushed",
        "create:smelting/copper_ingot_from_crushed",
        "create:smelting/zinc_ingot_from_crushed",
        "create:smelting/ingot_osmium_compat_mekanism", 
        "create:smelting/ingot_tin_compat_mekanism",
        "create:smelting/ingot_lead_compat_mekanism",
        "create:smelting/ingot_uranium_compat_mekanism",
        "createhalitosis:halitosis/glass_bottle"
    ]
    removeIds.forEach(value => {
        event.remove({ id: value })
    })

})