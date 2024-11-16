ServerEvents.recipes(event => {
    const mixing = event.recipes.create.mixing;
    mixing([
        Fluid.of("minecraft:lava", 1000),
        Item.of('meng:lava_chunk').withChance(0.25)
    ], [
        'minecraft:magma_block',
        Fluid.of("minecraft:water", 1000)
    ], 20 * 15);

    mixing(Fluid.of("minecraft:lava",250),['32x meng:dirty_cobblestone','32x #forge:string'],20*20).heated();   
})