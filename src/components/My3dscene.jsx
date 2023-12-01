import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ComputersCanvas } from './canvas';

const My3Dscene = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    // Create a WebGLRenderer with the canvas element
    const renderer = new THREE.WebGLRenderer({ canvas });

    // Create a scene
    const scene = new THREE.Scene();

    // Add your 3D models and objects to the scene
    // Example:
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a render loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animations or interactions here

      // Render the scene
      renderer.render(scene, camera);
    };

    animate();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} />
      <ComputersCanvas /> {/* Include the ComputersCanvas component here */}
    </div>
  )
};

export default My3Dscene;
