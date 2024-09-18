const $BasicStorageCell = Java.loadClass("appeng.items.storage.BasicStorageCell")
const $StorageComponentItem = Java.loadClass("appeng.items.materials.StorageComponentItem")
const $AEItems = Java.loadClass("appeng.core.definitions.AEItems")
const $AEKeyType = Java.loadClass("appeng.api.stacks.AEKeyType")
const $Item = Java.loadClass("net.minecraft.world.item.Item");

StartupEvents.registry("item", event => {
    for (const key in AECellComponentItems) {
        let aeValue = AECellComponentItems[key];
        event.createCustom(aeValue.cellComponent,()=>new $StorageComponentItem($Item.Properties().stacksTo(1), aeValue.byte))
        event.createCustom(aeValue.storageCell,()=>new $BasicStorageCell($Item.Properties().stacksTo(1), Item.of(aeValue.cellComponent), $AEItems.ITEM_CELL_HOUSING, aeValue.AE2Energy, aeValue.byte, aeValue.bytesPer, aeValue.maxItemTypeCount, $AEKeyType.items()))
    }
})
