// priority: 5

const backpack = "meng:backpack";
const dataBackpack = "backpack";
const dataBackpackItem = dataBackpack + "Item";
/**
 * 
 * @param {*} inventoryContainer 
 * @param {Internal.ItemStack} backpackItem 
 */
function backpackFunc(inventoryContainer,backpackItem) {
    let n = 0;
    if (inventoryContainer.getItems().size() == 90) n = 54;
    let list = [];
    for (let i = 0; i < n; i++) {
        let item = inventoryContainer.getSlot(i).getItem();
        if (item.is("air")) continue;
        list.push({ item: item.id, count: item.count, slot: i, nbt: item.nbt })
    }
    backpackItem.nbt.merge({ "items": list })
}

function openBackpackFunc(player, item) {
    if (!item.hasNBT()) item.setNbt({ items: [] })
    let nbt = item.getNbt();
    let itemList = nbt.get("items");
    if (itemList == undefined) item.nbt.merge({ items: [] });

    player.openMenu(new $SimpleMenuProvider((i, inv, p) => {
        let chest = $ChestMenu.sixRows(i, inv)
        for (let i = 0; i < itemList.size(); i++) {
            let value = itemList.get(i)
            chest.getSlot(value.slot).set(Item.of(value.item, value.count, value.nbt));
        }
        player.data.add(dataBackpack, chest.hashCode().toString())
        return chest
    }, Text.of(item.displayName).yellow()))
}