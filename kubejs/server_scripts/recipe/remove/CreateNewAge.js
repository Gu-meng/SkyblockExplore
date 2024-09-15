ServerEvents.recipes(event => {
    let removeIds = [
        "create_new_age:shapeless/energiser_t1",
        "create_new_age:cutting/overcharged_golden_sheet",
        "create_new_age:energising/iron_ingot",
        "create_new_age:shaped/advanced_solar_plate",
        "create_new_age:cutting/overcharged_iron_sheet"
    ]
    removeIds.forEach(value => {
        event.remove({ id: value })
    })
})