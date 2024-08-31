ServerEvents.recipes(event => {
    const mixing = event.recipes.create.mixing;
    mixing([
        Fluid.of("minecraft:lava", 500),
        Item.of('meng:lavl_chunk').withChance(0.25)
    ], [
        'minecraft:magma_block',
        Fluid.of("minecraft:water", 1000)
    ], 20 * 15);
})