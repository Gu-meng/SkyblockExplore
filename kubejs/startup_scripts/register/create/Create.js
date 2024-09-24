const $REGISTRATE_CREATE = Java.loadClass("com.simibubi.create.Create").REGISTRATE
const $CogWheelBlock = Java.loadClass("com.simibubi.create.content.kinetics.simpleRelays.CogWheelBlock")
const $CogwheelBlockItem = Java.loadClass("com.simibubi.create.content.kinetics.simpleRelays.CogwheelBlockItem")
const $BlockStressDefaults = Java.loadClass("com.simibubi.create.content.kinetics.BlockStressDefaults")
const $TagGen = Java.loadClass("com.simibubi.create.foundation.data.TagGen")
const $BlockStateGen = Java.loadClass("com.simibubi.create.foundation.data.BlockStateGen")
const $SharedProperties = Java.loadClass("com.simibubi.create.foundation.data.SharedProperties")
const $CreateRegistrate = Java.loadClass("com.simibubi.create.foundation.data.CreateRegistrate")
const $BracketedKineticBlockModel = Java.loadClass("com.simibubi.create.content.kinetics.simpleRelays.BracketedKineticBlockModel")

// console.log($CreateRegistrate.blockModel(()=> new $BracketedKineticBlockModel()));

//bug齿轮

$REGISTRATE_CREATE.block("test_cogwheel_meng",(p)=>$CogWheelBlock.small(p))
    .initialProperties(()=>$SharedProperties.stone())
    .transform($BlockStressDefaults.setNoImpact())
    .transform($TagGen.axeOrPickaxe())
    .blockstate($BlockStateGen.axisBlockProvider(false))
    .simpleItem()
    .register()

/*
java 代码
REGISTRATE.block("large_cogwheel", CogWheelBlock::large)
		.initialProperties(SharedProperties::stone)
		.properties(p -> p.sound(SoundType.WOOD).mapColor(MapColor.DIRT))
		.transform(axeOrPickaxe())
		.transform(BlockStressDefaults.setNoImpact())
		.blockstate(BlockStateGen.axisBlockProvider(false))
		.onRegister(CreateRegistrate.blockModel(() -> BracketedKineticBlockModel::new))
		.item(CogwheelBlockItem::new)
		.build()
		.register();
*/

for (let i = 0; i < 10; i++) {
    console.log(i); 
}