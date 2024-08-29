ServerEvents.recipes(event=>{
    // 小水车
    event.shaped('create:water_wheel',[
        ['#minecraft:wooden_slabs','meng:iron_dust','#minecraft:wooden_slabs'],
        ['meng:iron_dust','create:shaft','meng:iron_dust'],
        ['#minecraft:wooden_slabs','meng:iron_dust','#minecraft:wooden_slabs']
    ]).id("create:crafting/kinetics/water_wheel");

    //动力筛子
    event.shaped('createsifter:sifter',[
        ['create:andesite_casing','meng:iron_frame','create:andesite_casing'],
        ['#minecraft:wooden_fences','create:cogwheel','#minecraft:wooden_fences'],
        ['#forge:stone','#forge:stone','#forge:stone']
    ]).id('createsifter:sifter');

    // 大水车
    event.shaped('create:large_water_wheel',[
        ['meng:iron_timber_sheet','meng:iron_timber_sheet','meng:iron_timber_sheet'],
        ['meng:iron_timber_sheet','create:shaft','meng:iron_timber_sheet'],
        ['meng:iron_timber_sheet','meng:iron_timber_sheet','meng:iron_timber_sheet']
    ]).id("create:crafting/kinetics/large_water_wheel");

    // 传动杆
    event.shaped('4x create:shaft',[
        ['create:andesite_alloy'],
        ['create:andesite_alloy']
    ]).id("create:crafting/kinetics/shaft");
})