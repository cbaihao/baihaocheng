"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import { AsciiEffect } from "three/examples/jsm/effects/AsciiEffect.js";

export default function STLToASCII() {
  const mountRef = useRef<HTMLDivElement>(null);
  const characters = " .:-+*=%@#";

  // Three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const effectRef = useRef<AsciiEffect | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const clockRef = useRef<THREE.Clock | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Three.js components
    initializeThreeJS();
    loadDefaultSTL();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (effectRef.current && mountRef.current) {
        mountRef.current.removeChild(effectRef.current.domElement);
      }
    };
  }, []);

  const initializeThreeJS = () => {
    // Clock
    clockRef.current = new THREE.Clock();

    // Scene
    sceneRef.current = new THREE.Scene();
    sceneRef.current.background = new THREE.Color(0, 0, 0);

    // Lights
    const pointLight1 = new THREE.PointLight(0xffffff, 1, 0, 0);
    pointLight1.position.set(100, 100, 400);
    sceneRef.current.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-500, 100, -400);
    sceneRef.current.add(pointLight2);

    // Camera
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    cameraRef.current = new THREE.PerspectiveCamera(
      45,
      sizes.width / sizes.height,
      0.1,
      2000
    );

    // Renderer
    rendererRef.current = new THREE.WebGLRenderer();

    // ASCII Effect with white background and black text
    createEffect();

    // Add to DOM
    if (mountRef.current && effectRef.current) {
      mountRef.current.appendChild(effectRef.current.domElement);
    }

    // Handle window resize
    window.addEventListener("resize", onWindowResize);
  };

  const createEffect = () => {
    if (!rendererRef.current) return;

    const effectSize = { amount: 0.205 };

    effectRef.current = new AsciiEffect(rendererRef.current, characters, {
      invert: true,
      resolution: effectSize.amount,
    });

    effectRef.current.setSize(window.innerWidth, window.innerHeight);
    effectRef.current.domElement.style.color = "black";
    effectRef.current.domElement.style.backgroundColor = "white";
  };

  const loadDefaultSTL = () => {
    const stlLoader = new STLLoader();
    const material = new THREE.MeshStandardMaterial();
    material.flatShading = true;
    material.side = THREE.DoubleSide;

    stlLoader.load("/test2.stl", (geometry) => {
      if (!sceneRef.current || !cameraRef.current || !effectRef.current) return;

      // Create mesh
      meshRef.current = new THREE.Mesh(geometry, material);

      geometry.computeVertexNormals();
      meshRef.current.geometry.center();
      meshRef.current.rotation.x = (-90 * Math.PI) / 180;

      // Position camera based on bounding box
      meshRef.current.geometry.computeBoundingBox();
      const bbox = meshRef.current.geometry.boundingBox;

      if (bbox) {
        meshRef.current.position.y = (bbox.max.z - bbox.min.z) / 5;
        cameraRef.current.position.x = bbox.max.x * 4;
        cameraRef.current.position.y = bbox.max.y;
        cameraRef.current.position.z = bbox.max.z * 3;
      }

      sceneRef.current.add(meshRef.current);

      // Controls for subtle interaction
      controlsRef.current = new OrbitControls(
        cameraRef.current,
        effectRef.current.domElement
      );
      controlsRef.current.enableDamping = true;
      controlsRef.current.dampingFactor = 0.05;

      // Start animation loop
      animate();
    });
  };

  const animate = () => {
    if (!sceneRef.current || !cameraRef.current || !effectRef.current) return;

    // Subtle rotation
    if (meshRef.current && clockRef.current) {
      const elapsedTime = clockRef.current.getElapsedTime();
      meshRef.current.rotation.z = elapsedTime * 0.1; // Slow rotation
    }

    // Update controls
    if (controlsRef.current) {
      controlsRef.current.update();
    }

    effectRef.current.render(sceneRef.current, cameraRef.current);
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  const onWindowResize = () => {
    if (!cameraRef.current || !rendererRef.current || !effectRef.current)
      return;

    cameraRef.current.aspect = window.innerWidth / window.innerHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    effectRef.current.setSize(window.innerWidth, window.innerHeight);
  };

  return (
    <div
      className="fixed inset-0 bg-white flex items-center justify-center"
      style={{ marginTop: "2rem" }}
    >
      {/* Three.js mount point */}
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
}
