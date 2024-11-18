ServerEvents.recipes(event=>{
    let emptying =  event.recipes.create.emptying
    emptying([Fluid.lava(5),Item.of("minecraft:magma_cream").withChance(0.8)],"minecraft:magma_cream");
})