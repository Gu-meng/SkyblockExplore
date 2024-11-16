const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses")
const $InfuseTypeDeferredRegister = Java.loadClass("mekanism.common.registration.impl.InfuseTypeDeferredRegister")


const regInfuse = new $InfuseTypeDeferredRegister(modid)

regInfuse.register("alloy_infused",0xeb512a)
regInfuse.register("alloy_reinforced",0x5e99ff)
regInfuse.register("alloy_atomic",0x9764ac)
regInfuse.register('dragon_breath',0xfa82f8)
regInfuse.register('glowstone',0xf8ff73) 

regInfuse.register($EventBuses.getModEventBus("kubejs").get())