ServerEvents.recipes(event => {
    const mixing = event.recipes.create.mixing;

    mixing('minecraft:iron_nugget','16x minecraft:arrow',20*20).heated();
})