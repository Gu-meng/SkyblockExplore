ServerEvents.tags("block",event=>{
    event.add('create:wrench_pickup',["createaddition:barbed_wire","mob_grinding_utils:fan","minecraft:chest"])
    event.add('meng:tool_shears',Ingredient.of('#minecraft:leaves').getItemIds().toArray())
    event.add('meng:tool_shears',['minecraft:cobweb','minecraft:glow_lichen','minecraft:dead_bush','minecraft:vine',
        'minecraft:grass','minecraft:tall_grass','minecraft:fern','minecraft:large_fern','minecraft:seagrass','minecraft:small_dripleaf',])
})