// @ts-nocheck
"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Motion3DObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = -Math.PI / 2;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -Math.PI / 2;
      ring2Ref.current.rotation.z = -state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <>
      <group position={[0, 0, 0]}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, 1]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.3}
            roughness={0.1}
            transparent
            opacity={0.9}
            envMapIntensity={1}
          />
        </mesh>
        <mesh ref={ringRef}>
          <torusGeometry args={[1.5, 0.02, 16, 100]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.4}
          />
        </mesh>
        <mesh ref={ring2Ref}>
          <torusGeometry args={[2, 0.015, 16, 100]} />
          <meshPhysicalMaterial
            color="#ffffff"
            metalness={0.6}
            roughness={0.2}
            transparent
            opacity={0.25}
          />
        </mesh>
        <pointLight position={[0, 0, 0]} intensity={0.5} />
      </group>
    </>
  );
}
