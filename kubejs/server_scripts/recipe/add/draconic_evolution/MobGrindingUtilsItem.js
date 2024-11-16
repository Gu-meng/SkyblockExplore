draconicRecipe.fusionCrafting("mob_grinding_utils:saw_upgrade_sharpness",
    Item.of('minecraft:enchanted_book').enchant('minecraft:sharpness', 5).weakNBT(),
    ["minecraft:diamond_sword", "minecraft:diamond_sword",
        "draconicevolution:draconium_dust", "draconicevolution:draconium_dust",
        "mob_grinding_utils:solid_xp_baby", "mob_grinding_utils:solid_xp_baby"],
    draconicTier.DRACONIUM, 100000)


draconicRecipe.fusionCrafting("mob_grinding_utils:saw_upgrade_beheading", "mob_grinding_utils:saw_upgrade_looting",
    [Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).weakNBT(), Item.of('minecraft:enchanted_book').enchant('minecraft:looting', 3).weakNBT(),
        '#forge:heads', '#forge:heads',
        "minecraft:diamond_axe", "minecraft:diamond_axe"],
    draconicTier.DRACONIUM, 100000)

