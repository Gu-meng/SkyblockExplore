ServerEvents.entityLootTables(event=>{
    event.modifyEntity("skeleton",loot=>{
        entityLootAddCrushbone(loot,1.5,3);
    });
})