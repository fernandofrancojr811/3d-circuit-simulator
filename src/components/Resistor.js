import * as THREE from 'three'

class Resistor{
    constructor(){
const geometry = new = THREE.BoxGeometry(1, 0.2, 0.2);
const material = new = THREE.MeshBasicMaterial({color: 0xff000});
this.mesh = new THREE.Mesh(geometry, material);
}
 getMesh(){
    return this.mesh;

 }
}

 export default Resistor;