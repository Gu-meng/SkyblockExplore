ServerEvents.recipes(event => {
    event.replaceInput({ id: "mob_grinding_utils:recipe_spikes" }, "minecraft:iron_block", 'createaddition:barbed_wire');
    event.replaceInput({ id: "mob_grinding_utils:recipe_dragon_muffler" }, 'minecraft:dragon_egg', 'minecraft:dragon_head');

    event.shaped('mob_grinding_utils:fan', [
        ['minecraft:stone_slab', 'create:iron_sheet', 'minecraft:stone_slab'],
        ['create:iron_sheet', 'create:propeller', 'create:iron_sheet'],
        ['minecraft:stone_slab', 'create:iron_sheet', 'minecraft:stone_slab']
    ]).id("mob_grinding_utils:recipe_fan");

    event.shaped('6x mob_grinding_utils:entity_conveyor',[
        ['create:iron_sheet','minecraft:slime_block','create:iron_sheet'],
        ['create:iron_sheet','create:belt_connector','create:iron_sheet']
    ]).id("mob_grinding_utils:recipe_entity_conveyor");

    event.shaped('4x mob_grinding_utils:tinted_glass',[
        ['create:powdered_obsidian','meng:stalinite_block','create:powdered_obsidian'],
        ['meng:stalinite_block','minecraft:tinted_glass','meng:stalinite_block'],
        ['create:powdered_obsidian','meng:stalinite_block','create:powdered_obsidian']
    ]).id("mob_grinding_utils:recipe_tintedglass");
})