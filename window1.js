// Wait for the document to load
document.addEventListener('DOMContentLoaded', function () {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();
  
  // Set the renderer size to match the container element
  const container = document.getElementById('scene-container');
  renderer.setSize(container.clientWidth, container.clientHeight);
  
  // Add the renderer element to the container
  container.appendChild(renderer.domElement);

  // Add a cube to the scene
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  
  // Position the camera
  camera.position.z = 5;
  
  // Render the scene
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  
  animate();
});
