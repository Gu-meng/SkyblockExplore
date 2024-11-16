ServerEvents.recipes(event=>{
    const removeId = [
        "mob_grinding_utils:entity_spawner",
        "mob_grinding_utils:recipe_entity_spawner",
        "mob_grinding_utils:recipe_saw_upgrade_beheading",
        "mob_grinding_utils:recipe_saw_upgrade_sharpness"
    ]
    removeId.forEach(value=>{
        event.remove({id:value})
    })
    
})