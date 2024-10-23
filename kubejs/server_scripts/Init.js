// priority: 15

const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");
const $Integer = Java.loadClass("java.lang.Integer")
let $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType")
let $Gas = Java.loadClass("mekanism.api.chemical.gas.Gas")
const $ObjectiveCriteria = Java.loadClass("net.minecraft.world.scores.criteria.ObjectiveCriteria")
const $RenderType = Java.loadClass("net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType")

let $Direction = Java.loadClass("net.minecraft.core.Direction")
let $DoorHingeSide = Java.loadClass("net.minecraft.world.level.block.state.properties.DoorHingeSide")
let $Boolean = Java.loadClass("java.lang.Boolean");

Client.setTitle(Text.translate("meng.client.window.title").getString())

ServerEvents.loaded(e=>{
    e.server.scheduleInTicks(1,()=>{})
})