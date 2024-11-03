// priority: 15

const $EnderPearlEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTeleportEvent$EnderPearl");
const $BlockEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent");
const $EntityTravelToDimensionEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent");
const $NeighborNotifyEvent = Java.loadClass("net.minecraftforge.event.level.BlockEvent$NeighborNotifyEvent");

const $PipeCollisionEvent = Java.loadClass("com.simibubi.create.api.event.PipeCollisionEvent")

const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping");
const $GLFWkey = Java.loadClass("org.lwjgl.glfw.GLFW");

const $BasicStorageCell = Java.loadClass("appeng.items.storage.BasicStorageCell")
const $StorageComponentItem = Java.loadClass("appeng.items.materials.StorageComponentItem")
const $AEItems = Java.loadClass("appeng.core.definitions.AEItems")
const $AEKeyType = Java.loadClass("appeng.api.stacks.AEKeyType")


const $Item = Java.loadClass("net.minecraft.world.item.Item");
const $ServerPlayer = Java.loadClass("net.minecraft.server.level.ServerPlayer");

const $BlockStateProperties = Java.loadClass("net.minecraft.world.level.block.state.properties.BlockStateProperties")
const $BlockTags =Java.loadClass("net.minecraft.tags.BlockTags")

const $LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams$Builder");
const $LootContextParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");