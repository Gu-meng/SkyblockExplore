const $EntityTravelToDimensionEvent = Java.loadClass("net.minecraftforge.event.entity.EntityTravelToDimensionEvent")

// function e (event){
//     console.log(event +  "触发了");
// }

// ForgeEvents.eventBus().addGenericListener<$EntityTravelToDimensionEvent>(event=>e(event))

ForgeEvents.onEvent($EntityTravelToDimensionEvent, event => {
    global.entityTravelToDimension(event);
})

global.entityTravelToDimension = (event) => {
    let resourceKey = event.dimension;
    if (resourceKey.getPath() == "the_nether") {
        try {
            event.setCanceled(true)
        } catch (e) {
            console.error(e);
        }
    }
}