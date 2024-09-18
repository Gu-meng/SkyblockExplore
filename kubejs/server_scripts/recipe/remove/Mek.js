ServerEvents.recipes(event=>{
    let levelList = [
        "basic",
        "advanced",
        "elite",
        "ultimate"
    ]
    let removeList = [
        'smelting',
        'enriching',
        'crushing',
        'compressing',
        'combining',
        'purifying',
        'injecting',
        'infusing',
        'sawing'
    ]
    levelList.forEach(value=>{
        removeList.forEach(id=>{
            let recipeId = `mekanism:factory/${value}/${id}`
            event.remove({id:recipeId})
        })
    })
    let removeId = [
        "mekanism:processing/steel/enriched_iron_to_dust",
        "mekanism:nucleosynthesizing/wither_skeleton_skull",
        "mekanism:processing/iron/enriched",
        "mekanism:control_circuit/basic",
        "mekanism:chemical_tank/advanced",
        "mekanism:chemical_tank/elite",
        "mekanism:chemical_tank/ultimate",
        "mekanism:fluid_tank/advanced",
        "mekanism:fluid_tank/elite",
        "mekanism:fluid_tank/ultimate",
        "mekanism:control_circuit/advanced",
        "mekanism:enriching/conversion/obsidian_to_obsidian_dust",
        "mekanism:control_circuit/elite",
        "mekanism:control_circuit/ultimate"
    ]
    removeId.forEach(value=>{
        event.remove({id:value})
    })
    
})