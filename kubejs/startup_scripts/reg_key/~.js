const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry");
 
global.regKey = new $KeyMapping(
  "key.meng.multiple_blocks",
  $GLFWkey.GLFW_KEY_GRAVE_ACCENT,
  "key.keybinding.multiple_blocks"
);

global.regKeyB = new $KeyMapping(
  "key.meng.packsack",
  $GLFWkey.GLFW_KEY_B,
  "key.keybinding.packsack"
);
 
ClientEvents.init(() => {
  $KeyMappingRegistry.register(global.regKey);
  $KeyMappingRegistry.register(global.regKeyB);
}); 