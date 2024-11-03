ServerEvents.recipes(event=>{
    let emptying =  event.recipes.create.emptying
    emptying([Fluid.of("meng:nether_fluid",1),Item.of("minecraft:netherrack").withChance(0.5)],Item.of("minecraft:netherrack"));
})