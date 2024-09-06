ServerEvents.recipes(event=>{
    const mechanicalCrafting = event.recipes.create.mechanical_crafting
    mechanicalCrafting('mob_grinding_utils:saw',[
        'tltlt',
        'cjgjc',
        'cjqjc',
        'bbbbb'
    ],{
        t : 'minecraft:iron_block',
        l : 'create:minecart_coupling',
        c : 'create_new_age:overcharged_diamond',
        j : 'meng:saw_blade',
        g : 'create:shaft',
        q : 'meng:precision_machine_parts',
        b : 'create_new_age:overcharged_iron_sheet'
    })
})