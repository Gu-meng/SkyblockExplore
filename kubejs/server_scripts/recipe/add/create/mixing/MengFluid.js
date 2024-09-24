ServerEvents.recipes(event=>{
    const mixing = event.recipes.create.mixing;
    mixing(Fluid.of("meng:steel",100),'#forge:dusts/steel',20 * 30).superheated()
})