import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


function RotatingBox() {
  const meshRef = useRef();
  let sizex = 1;

  useFrame((state, delta) => {
    // rotate cube every frame
    meshRef.current.rotation.y += delta;
    sizex = meshRef.current.scale.x;
    if (sizex <= 6) {
      sizex += delta * 0.1;
      // console.log(sizex, "increasing...")
    }
    else if (sizex >= 6) {
      sizex=1
    }
    meshRef.current.scale.x = sizex;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#FFA500" />
    </mesh>
  );
}

function RotatingCube() {
  return (
    <Canvas className="w-full h-full">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <RotatingBox />
    </Canvas>
  );
}

export default RotatingCube;
