// ClientEvents.tick(event => {
//     const key = global.regKey;
//     event.player.tell(key.isUnbound())
//     if (key.consumeClick()) {
//         if (!event.player.getPersistentData().getBoolean("multipleBlocks")) {
//             // event.player.sendData("multipleBlocks",{isOpen:true})
//             event.player.getPersistentData().putBoolean("multipleBlocks", true);
//             event.player.tell(event.player.getPersistentData().getBoolean("multipleBlocks"));
//         }
//     } else {
//         if (event.player.getPersistentData().getBoolean("multipleBlocks")) {
//             event.player.tell("hello2");
//             event.player.getPersistentData().putBoolean("multipleBlocks", false);
//         }
//     }
// })