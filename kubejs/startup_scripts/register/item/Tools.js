StartupEvents.registry("item", event => {
    event.create(ToolItem.crushbone_axe, "axe")
        .speed(10)
        .speedBaseline(-3.5)
        .attackDamageBaseline(8)
        .maxDamage(100);

    event.create(ToolItem.crushbone_sword, "sword")
        .speedBaseline(1.6)
        .attackDamageBaseline(4)
        .maxDamage(50);

    event.create(ToolItem.rain_doll)
        .maxDamage(2)
        .fireResistant(true)
        .unstackable()

    event.create(ToolItem.sunny_doll)
        .maxDamage(2)
        .fireResistant(true)
        .unstackable()

    event.create(ToolItem.crushbone_shears,"shears")
        .maxDamage(150)
        .speedBaseline(10)
})