ServerEvents.recipes(event=>{
    const mechanicalCrafting = event.recipes.create.mechanical_crafting
    mechanicalCrafting('meng:screw_nut',[
        ' i ',
        'i i',
        ' i '
    ],{
        i : 'minecraft:iron_ingot'
    });

    mechanicalCrafting('meng:screw',[
        'r',
        'a',
        'a'
    ],{
        r : 'meng:reinforce_iron_sheet',
        a : 'create:andesite_alloy'
    });
})