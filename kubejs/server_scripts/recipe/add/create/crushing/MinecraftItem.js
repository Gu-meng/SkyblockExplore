ServerEvents.recipes(event=>{
    const crushing = event.recipes.create.crushing
    crushing([
        Item.of('minecraft:gravel').withChance(1),
        Item.of('meng:slag').withChance(0.3),
    ],'#forge:cobblestone')
})