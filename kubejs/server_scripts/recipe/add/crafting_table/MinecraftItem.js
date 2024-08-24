ServerEvents.recipes(event=>{
    // 骨块的合成配方
    event.shapeless("minecraft:bone_block",[
        'minecraft:bone','minecraft:bone','minecraft:bone',
        'minecraft:bone','minecraft:bone','minecraft:bone',
        'minecraft:bone','minecraft:bone','minecraft:bone'
    ]);
    // 铁粒的合成
    event.shaped('minecraft:iron_nugget',[
        ['meng:iron_dust','meng:iron_dust'],
        ['meng:iron_dust','meng:iron_dust']
    ]);
    // 骨粉
    event.shapeless('minecraft:bone_meal',["meng:crushbone"]);

    // 骨粉
    event.shapeless('27x minecraft:bone_meal',["minecraft:bone_block"]).id("minecraft:bone_meal_from_bone_block");

    // 闪长岩
    event.shaped('minecraft:diorite',[
        ['meng:white_dust','minecraft:cobblestone'],
        ['minecraft:cobblestone','meng:white_dust']
    ]).id("minecraft:diorite");

    // 熔炉
    event.shaped('minecraft:furnace',[
        ['minecraft:cobblestone','minecraft:stone','minecraft:cobblestone'],
        ['minecraft:stone','meng:iron_mesh','minecraft:stone'],
        ['minecraft:cobblestone','minecraft:stone','minecraft:cobblestone']
    ]).id('minecraft:furnace');
})