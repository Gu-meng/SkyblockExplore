ServerEvents.recipes(event=>{
    // 小水车
    event.shaped('create:water_wheel',[
        ['#minecraft:wooden_slabs','meng:iron_dust','#minecraft:wooden_slabs'],
        ['meng:iron_dust','create:shaft','meng:iron_dust'],
        ['#minecraft:wooden_slabs','meng:iron_dust','#minecraft:wooden_slabs']
    ]).id("create:crafting/kinetics/water_wheel");
})