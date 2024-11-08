StartupEvents.registry("item",event=>{
    Object.values(MeshItem).forEach(value => {
        event.create(value,"createsifter:mesh").tag('createsifter:meshes')
    });
    Object.values(MeshAdvanced).forEach(value => {
        event.create(value,"createsifter:advanced_mesh").tag('createsifter:meshes');
    })
})