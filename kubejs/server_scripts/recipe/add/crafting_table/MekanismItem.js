ServerEvents.recipes(event=>{
    event.shaped("mekanism:basic_fluid_tank",[
        ["minecraft:iron_ingot",'meng:iron_frame',"minecraft:iron_ingot"],
        ['meng:stalinite_block','minecraft:bucket','meng:stalinite_block'],
        ["minecraft:iron_ingot","meng:reinforce_iron_sheet","minecraft:iron_ingot"]
    ]).id("mekanism:fluid_tank/basic");

    event.shaped('mekanism:advanced_tier_installer',[
        ['mekanism:advanced_control_circuit','mekanism:ingot_steel','mekanism:advanced_control_circuit'],
        ['mekanism:ingot_steel','mekanism:basic_tier_installer','mekanism:ingot_steel'],
        ['mekanism:advanced_control_circuit','mekanism:ingot_steel','mekanism:advanced_control_circuit']
    ]).id("mekanism:tier_installer/advanced")

    event.replaceInput({id:"mekanismgenerators:generator/solar"},'minecraft:iron_ingot',"create_new_age:overcharged_diamond_wire");

    event.replaceInput({id:"mekanismgenerators:generator/heat"},'minecraft:furnace','ae2:vibration_chamber');

    fullTable(event,"mekanism:dirty_netherite_scrap","meng:netherite_scrap_nugget")

    event.replaceInput({input:"mekanism:steel_casing"},"mekanism:steel_casing","meng:better_precision_machine_parts")

    event.shaped("mekanism:jetpack",[
        'bab',
        'cdc',
        ' v '
    ],{
        b:"mekanism:ingot_steel",
        a:"mekanism:ultimate_control_circuit",
        c:"minecraft:elytra",
        d:"mekanism:basic_chemical_tank",
        v:"mekanism:ingot_tin"
    })

    event.shaped("4x mekanism:structural_glass",[
        'aba',
        'bab',
        'aba'
    ],{
        a:"minecraft:glass",
        b:"mekanismgenerators:reactor_glass"
    }).id("mekanism:structural_glass")
})