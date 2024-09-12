ServerEvents.recipes(event=>{
    const mechanicalCrafting = event.recipes.create.mechanical_crafting
    mechanicalCrafting('16x create:fluid_pipe',[
        ' bbb ',
        'bi ib',
        ' bbb ',

    ],{
        b:'create:brass_sheet',
        i:'meng:iron_frame'
    })
})