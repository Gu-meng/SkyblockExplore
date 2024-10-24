const $KeyMappingRegistry = Java.loadClass(
  "dev.architectury.registry.client.keymappings.KeyMappingRegistry"
);
 
global.regKey = new $KeyMapping(
  "key.meng.multiple_blocks",
  $GLFWkey.GLFW_KEY_GRAVE_ACCENT,
  "key.keybinding.multiple_blocks"
);
 
ClientEvents.init(() => {
  $KeyMappingRegistry.register(global.regKey);
}); 