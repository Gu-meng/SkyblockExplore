ServerEvents.recipes(event=>{
    event.shaped("mekanism:basic_fluid_tank",[
        ["minecraft:iron_ingot",'meng:iron_frame',"minecraft:iron_ingot"],
        ['meng:stalinite_block','minecraft:bucket','meng:stalinite_block'],
        ["minecraft:iron_ingot","meng:reinforce_iron_sheet","minecraft:iron_ingot"]
    ]).id("mekanism:fluid_tank/basic");
})