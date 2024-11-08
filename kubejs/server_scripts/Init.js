// priority: 15

const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");
const $DoorBlock = Java.loadClass("net.minecraft.world.level.block.DoorBlock")
const $Difficulty = Java.loadClass("net.minecraft.world.Difficulty")

const $Integer = Java.loadClass("java.lang.Integer")
const $InfuseType = Java.loadClass("mekanism.api.chemical.infuse.InfuseType")
const $Gas = Java.loadClass("mekanism.api.chemical.gas.Gas")
const $ObjectiveCriteria = Java.loadClass("net.minecraft.world.scores.criteria.ObjectiveCriteria")
const $RenderType = Java.loadClass("net.minecraft.world.scores.criteria.ObjectiveCriteria$RenderType")

const $Direction = Java.loadClass("net.minecraft.core.Direction")
const $DoorHingeSide = Java.loadClass("net.minecraft.world.level.block.state.properties.DoorHingeSide")
const $Boolean = Java.loadClass("java.lang.Boolean");

const $BlockPatternBuilder = Java.loadClass("net.minecraft.world.level.block.state.pattern.BlockPatternBuilder")
const $BlockInWorld = Java.loadClass("net.minecraft.world.level.block.state.pattern.BlockInWorld")
const $BlockTags = Java.loadClass("net.minecraft.tags.BlockTags")
const $BlockStatePredicate = Java.loadClass("net.minecraft.world.level.block.state.predicate.BlockStatePredicate")
const $EntityType = Java.loadClass("net.minecraft.world.entity.EntityType")
const $CarvedPumpkinBlock = Java.loadClass("net.minecraft.world.level.block.CarvedPumpkinBlock")

const $SimpleMenuProvider = Java.loadClass("net.minecraft.world.SimpleMenuProvider");
const $ChestMenu = Java.loadClass("net.minecraft.world.inventory.ChestMenu")
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")

Client.setTitle(Text.translate("meng.client.window.title").getString())

ServerEvents.loaded(e=>{
    e.server.scheduleInTicks(1,()=>{})

    new FileHelper("Saplings.json").updateJson(Ingredient.of("#minecraft:saplings").getItemIds());
    new FileHelper("beds.json").updateJson(Ingredient.of("#minecraft:beds").getItemIds());
})