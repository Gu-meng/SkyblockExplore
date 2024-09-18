const $EventBuses = Java.loadClass("dev.architectury.platform.forge.EventBuses")
const $InfuseTypeDeferredRegister = Java.loadClass("mekanism.common.registration.impl.InfuseTypeDeferredRegister")


const regInfuse = new $InfuseTypeDeferredRegister(modid)

regInfuse.register("alloy_infused",0xeb512a)
regInfuse.register("alloy_reinforced",0x5e99ff)
regInfuse.register("alloy_atomic",0x9764ac)

regInfuse.register($EventBuses.getModEventBus("kubejs").get())