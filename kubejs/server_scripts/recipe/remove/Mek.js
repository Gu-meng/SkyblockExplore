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
        'nfusing',
        'sawing'
    ]
    levelList.forEach(value=>{
        removeList.forEach(id=>{
            let recipeId = `mekanism:factory/${value}/${id}`
            event.remove({id:recipeId})
        })
    })
})