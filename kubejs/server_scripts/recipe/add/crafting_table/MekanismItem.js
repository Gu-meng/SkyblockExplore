ServerEvents.recipes(event=>{
    event.shaped("mekanism:basic_fluid_tank",[
        ["mekanism:ingot_steel",'meng:iron_frame',"mekanism:ingot_steel"],
        ["ae2:quartz_glass",,"ae2:quartz_glass"],
        ["minecraft:iron_ingot","meng:reinforce_iron_sheet","minecraft:iron_ingot"]
    ]).id("mekanism:fluid_tank/basic");

    event.shaped('mekanism:advanced_tier_installer',[
        ['mekanism:advanced_control_circuit','mekanism:ingot_steel','mekanism:advanced_control_circuit'],
        ['mekanism:ingot_steel','mekanism:basic_tier_installer','mekanism:ingot_steel'],
        ['mekanism:advanced_control_circuit','mekanism:ingot_steel','mekanism:advanced_control_circuit']
    ]).id("mekanism:tier_installer/advanced")

    event.replaceInput({id:"mekanismgenerators:generator/solar"},'minecraft:iron_ingot',"create_new_age:overcharged_diamond_wire");

    event.replaceInput({id:"mekanismgenerators:generator/solar"},"mekanism:ingot_osmium","meng:overcharged_osmium");
    
    event.replaceInput({id:"mekanismgenerators:generator/gas_burning"},"mekanism:ingot_osmium","meng:overcharged_osmium");
    
    event.replaceInput({id:"mekanismgenerators:generator/heat"},'minecraft:furnace','ae2:vibration_chamber');

    fullTable(event,"mekanism:dirty_netherite_scrap","meng:netherite_scrap_nugget")
    
    event.replaceInput({id:"mekanism:chemical_infuser"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:digital_miner"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:energized_smelter"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:chemical_dissolution_chamber"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:chemical_washer"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:chemical_crystallizer"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:solar_neutron_activator"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:antiprotonic_nucleosynthesizer"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:modification_station"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanismgenerators:generator/gas_burning"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:osmium_compressor"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:combiner"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:security_desk"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:chemical_dissolution_chamber"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:chemical_washer"},"mekanism:steel_casing","meng:better_precision_machine_parts")
    event.replaceInput({id:"mekanism:energy_cube/basic"},"mekanism:steel_casing","meng:precision_machine_parts")

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