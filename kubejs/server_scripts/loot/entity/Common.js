// priority: 5

function entityLootAddCrushbone(loot,crushboneWeight,maxCount){
    crushboneWeight*=10
    loot.addPool(pool=>{
        pool.addItem('meng:crushbone').weight(crushboneWeight).count([1,maxCount]);
        pool.addEmpty(100 - crushboneWeight);
        pool.lootingEnchant(2,5);
        pool.entityProperties("killer",{
            type:"minecraft:player",
            equipment: {
                mainhand: {
                    items: [
                        "meng:crushbone_sword"  
                    ]
                }
            }
        });
    });
}