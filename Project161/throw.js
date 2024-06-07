AFRAME.registerComponent("bullets", {
 init : function() {
   this.shootbullet()
 } ,
 shootbullet : function() {
    window.addEventListener("keydown", (e)=> {
        if(e.key === "b") {
            var bullet = document.createElement("a-entity")
            bullet.setAttribute("geometry", {
                primitive : "sphere",
                radius : "0.5"
            })
            bullet.setAttribute("material", "color" , "blue")
            var cam = document.querySelector("#camera")
            pos = cam.getAttribute("position")

            bullet.setAttribute("position", {
                x : pos.x , 
                y : pos.y ,
                z : pos.z
            })

            var camera = document.querySelector("#camera").object3D
            direction = new THREE.Vector3()
            camera.getWorldDirection(direction)
            bullet.setAttribute("velocity", direction.multiplyScalar(-10))
            var scene = document.querySelector("#scene")
            scene.appendChild(bullet) 
        }
    }) 
 } 
})