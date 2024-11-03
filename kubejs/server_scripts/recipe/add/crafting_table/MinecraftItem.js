ServerEvents.recipes(event => {
    // 骨块的合成配方
    event.shaped("minecraft:bone_block", [
        ['minecraft:bone', 'minecraft:bone'],
        ['minecraft:bone','minecraft:bone']
    ]).id("minecraft:bone_block");
    // 铁粒的合成
    event.shaped('minecraft:iron_nugget', [
        ['meng:iron_dust', 'meng:iron_dust'],
        ['meng:iron_dust', 'meng:iron_dust']
    ]);

    // 骨头
    fullTable(event, 'minecraft:bone', "meng:crushbone")

    // 骨粉
    event.shapeless('minecraft:bone_meal', "meng:crushbone");

    // 骨粉
    event.shapeless('36x minecraft:bone_meal', ["minecraft:bone_block"]).id("minecraft:bone_meal_from_bone_block");

    // 闪长岩
    event.shaped('minecraft:diorite', [
        ['meng:white_dust', 'minecraft:cobblestone'],
        ['minecraft:cobblestone', 'meng:white_dust']
    ]).id("minecraft:diorite");

    // 熔炉
    event.shaped('minecraft:furnace', [
        ['minecraft:cobblestone', 'minecraft:stone', 'minecraft:cobblestone'],
        ['minecraft:stone', 'meng:iron_frame', 'minecraft:stone'],
        ['minecraft:cobblestone', 'minecraft:stone', 'minecraft:cobblestone']
    ]).id('minecraft:furnace');

    // 岩浆块
    event.shapeless('minecraft:magma_block', ['meng:lava_chunk', 'meng:lava_chunk', 'meng:lava_chunk', 'meng:lava_chunk'])

    //台阶合成木板
    Ingredient.of('#minecraft:slabs').getItemIds().forEach(slab => {
        event.findRecipes({ type: "minecraft:crafting_shaped", output: slab }).forEach(value => {
            if (value.getOriginalRecipe().getIngredients().size() > 3) return
            let item = value.getOriginalRecipe().getIngredients().get(0).getFirst();
            value.getOriginalRecipe().getIngredients().forEach(inputItem=>{
                if (item == null) return;
                if (item != inputItem) item = null
            })
            if (item == null) return;
            event.shaped(item, [slab,slab])
        })
    })

    event.shaped(Item.of('minecraft:chainmail_helmet'),[
        ['minecraft:iron_nugget','minecraft:iron_nugget','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','','minecraft:iron_nugget']
    ])

    event.shaped(Item.of('minecraft:chainmail_chestplate'),[
        ['minecraft:iron_nugget','','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','minecraft:iron_nugget','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','minecraft:iron_nugget','minecraft:iron_nugget']
    ])

    event.shaped(Item.of('minecraft:chainmail_leggings'),[
        ['minecraft:iron_nugget','minecraft:iron_nugget','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','','minecraft:iron_nugget']
    ])

    event.shaped(Item.of('minecraft:chainmail_boots'),[
        ['minecraft:iron_nugget','','minecraft:iron_nugget'],
        ['minecraft:iron_nugget','','minecraft:iron_nugget']
    ])

    // 安山岩
    fullTable(event, 'minecraft:andesite', 'meng:small_andesite')

    // 原石
    fullTable(event, 'minecraft:cobblestone', 'meng:small_cobblestone')

    // 闪长岩
    fullTable(event, 'minecraft:diorite', 'meng:small_diorite')

    event.shapeless("minecraft:redstone",['meng:redstone_dust','meng:redstone_dust','meng:redstone_dust','meng:redstone_dust'])
})