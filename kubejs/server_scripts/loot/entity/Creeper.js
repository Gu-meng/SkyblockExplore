ServerEvents.entityLootTables(event=>{
    event.modifyEntity("creeper",loot=>{
        entityLootAddCrushbone(loot,0.9,2);
    });
})