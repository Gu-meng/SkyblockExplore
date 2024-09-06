// priority: 15

const $Entity = Java.loadClass('net.minecraft.world.entity.Entity');
const $Level = Java.loadClass('net.minecraft.world.level.Level');

let title = Text.translate("meng.client.window.title")
Client.setTitle(title.getString())