StartupEvents.registry("item", event => {
    event.create(regIds.crushbone_axe, "axe")
        .speed(10)
        .speedBaseline(-3.5)
        .attackDamageBaseline(8)
        .maxDamage(100);

    event.create(regIds.crushbone_sword, "sword")
        .speedBaseline(1.6)
        .attackDamageBaseline(4)
        .maxDamage(50);

    event.create(regIds.rain_doll)
        .maxDamage(2)
        .fireResistant(true)
        .unstackable()

    event.create(regIds.sunny_doll)
        .maxDamage(2)
        .fireResistant(true)
        .unstackable()
})