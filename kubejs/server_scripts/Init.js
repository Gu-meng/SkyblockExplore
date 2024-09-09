// priority: 15

const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");
const $Integer = Java.loadClass("java.lang.Integer")

Client.setTitle(Text.translate("meng.client.window.title").getString())