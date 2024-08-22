ServerEvents.recipes(event=>{
    // 石头的配方
    event.campfireCooking('minecraft:stone',"minecraft:bone_block",0.25,20*10);
    event.smelting('minecraft:stone',"minecraft:bone_block",0.25,20*5);
    event.recipes.createsifter.sifting
})