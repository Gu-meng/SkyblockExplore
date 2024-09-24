ServerEvents.recipes(event=>{
    event.shaped('ae2:inscriber',[
        ['create_new_age:overcharged_iron','create:mechanical_press','create_new_age:overcharged_iron'],
        ['meng:precision_machine_parts','ae2:charged_certus_quartz_crystal','meng:iron_frame'],
        ['create_new_age:overcharged_iron','create:mechanical_press','create_new_age:overcharged_iron']
    ]).id("ae2:network/blocks/inscribers")

    event.shaped('ae2:controller',[
        'aba',
        'bab',
        'aba'
    ],{
        a:'ae2:smooth_sky_stone_block',
        b:'ae2:fluix_crystal',
        c:'meng:better_precision_machine_parts'
    }).id("ae2:network/blocks/controller")
})