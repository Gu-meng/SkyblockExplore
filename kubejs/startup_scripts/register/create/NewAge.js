const $ImplementedMagnetBlock = Java.loadClass("org.antarcticgardens.newage.content.generation.magnets.ImplementedMagnetBlock")

const $REGISTRATE = Java.loadClass("org.antarcticgardens.newage.CreateNewAge").REGISTRATE

$REGISTRATE.block("test",$ImplementedMagnetBlock.simple(48))
.simpleItem()
.register()

$REGISTRATE.block("test2",$ImplementedMagnetBlock.simple(64))
.simpleItem()
.register()

/*
const $CreateRegistrate = Java.loadClass("com.simibubi.create.foundation.data.CreateRegistrate")

let REGISTRATE = $CreateRegistrate.create("meng").register()

console.log(REGISTRATE);

REGISTRATE.defaultCreativeTab("items")

REGISTRATE.block("hello_block",$ImplementedMagnetBlock.simple(64))
.simpleItem()
.register()
*/