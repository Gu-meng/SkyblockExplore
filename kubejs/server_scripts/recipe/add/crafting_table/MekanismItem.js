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

    event.replaceInput({id:"mekanismgenerators:generator/solar"},'minecraft:iron_ingot','create_new_age:advanced_solar_heating_plate');

    event.replaceInput({id:"mekanismgenerators:generator/heat"},'minecraft:furnace','ae2:vibration_chamber');

    
})