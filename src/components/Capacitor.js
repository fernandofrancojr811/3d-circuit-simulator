import * as THREE from 'three';

class Capacitor{
    constuctor(){
        const geometry = new THREE.CylinderGeometry(0.2,0.2,1,32);
        const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.rotation.z= Math.PI /2; // this rotates to make it be horizontal


    }
    get Mesh(){
        return this.mesh;
    }
}

export default Capacitor;

