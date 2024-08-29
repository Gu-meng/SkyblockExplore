// 下面是测试代码

stringMesh([
    Item.of('minecraft:campfire', 3).withChance(0.3),
    Item.of('minecraft:bone_block', 1).withChance(0.5)
], 'minecraft:bedrock', 5, false);

stringMesh('minecraft:campfire', 'minecraft:bone_block', 5, false);

stringMesh([Fluid.of("lava")],'minecraft:oak_leaves',5,false);
