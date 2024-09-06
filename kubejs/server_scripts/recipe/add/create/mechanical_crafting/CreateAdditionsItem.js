ServerEvents.recipes(event=>{
    const mechanicalCrafting = event.recipes.create.mechanical_crafting

    mechanicalCrafting('createaddition:tesla_coil',[
        ['createaddition:electrum_spool','createaddition:connector','createaddition:electrum_spool'],
        ['','create:andesite_alloy',''],
        ['createaddition:capacitor','create:brass_casing','createaddition:capacitor'],
        ['create:brass_sheet','meng:precision_machine_parts','create:brass_sheet']
    ]).id("createaddition:mechanical_crafting/tesla_coil")
})