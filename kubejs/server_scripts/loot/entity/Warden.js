ServerEvents.entityLootTables(event=>{
    event.modifyEntity("warden",loot=>{
        loot.addPool(pool=>{
            pool.addItem('meng:deep_fear').count([1,3])
        })
    })
})