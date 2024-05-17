import * as THREE from 'three';
import Resistor from './components/Resistor';
import  Capacitor from './components/Capacitor';
let scene, camera, renderer;

function init() {
  // Scene setup
  scene = new THREE.Scene();

  // Camera setup
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Renderer setup
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('app').appendChild(renderer.domElement);

  // create and add a resistor to the scene
  const resistor = new Resistor();
  scene.add(res.getMesh());

// Create and add a capacitor to the scene
const capacitor = new Capacitor();
capacitor.getMesh().position.x = 2; // Position it to the right of the resistor
scene.add(capacitor.getMesh());

  // Render loop
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  animate();
}

window.onload = init;
