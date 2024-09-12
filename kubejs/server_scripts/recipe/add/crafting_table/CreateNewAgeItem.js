ServerEvents.recipes(event=>{
    event.shapeless('create_new_age:copper_wire','createaddition:copper_spool');
    event.shaped('create_new_age:basic_solar_heating_plate',[
        ['ae2:quartz_vibrant_glass','ae2:quartz_vibrant_glass','ae2:quartz_vibrant_glass'],
        ['create_new_age:overcharged_iron','create_new_age:heat_pipe','create_new_age:overcharged_iron'],
        ['create_new_age:overcharged_iron','create_new_age:heat_pipe','create_new_age:overcharged_iron']
    ]).id("create_new_age:shaped/basic_solar_plate")
})