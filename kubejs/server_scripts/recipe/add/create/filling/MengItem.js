ServerEvents.recipes(event=>{
    let filling =  event.recipes.create.filling
    filling(Item.of('meng:nether_gem').withChance(0.8),[Fluid.of("meng:nether_fluid",1000),'minecraft:emerald'])
})