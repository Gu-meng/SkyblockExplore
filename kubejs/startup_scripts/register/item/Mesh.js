StartupEvents.registry("item",event=>{
    event.create(MeshItem.iron_mesh,"createsifter:mesh").tag('createsifter:meshes')
    event.create(MeshItem.copper_mesh,"createsifter:mesh").tag('createsifter:meshes')
    event.create(MeshItem.diamond_mesh,"createsifter:advanced_mesh").tag('createsifter:meshes')
    event.create(MeshItem.charged_certus_quartz_crystal_mesh,"createsifter:advanced_mesh").tag('createsifter:meshes');
})