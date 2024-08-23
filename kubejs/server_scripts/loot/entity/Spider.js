ServerEvents.entityLootTables(event=>{
    event.modifyEntity("spider",loot=>{
        entityLootAddCrushbone(loot,0.3,1);
    });
})