ServerEvents.recipes(event=>{
    // 压块
    const compacting = event.recipes.create.compacting;
    // 压片
    const pressing = event.recipes.create.pressing;
    pressing('meng:iron_timber_sheet',[
        "#meng:iron_timbers"
    ])
})