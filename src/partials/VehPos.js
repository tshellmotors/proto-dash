import React from "react";
// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Gltf, OrbitControls, Box, Segment, Segments } from "@react-three/drei";

function Mesh() {
  return (
    <mesh position={[0, 0, 0]} rotation={[0, 45, 0]}>
      <Gltf src="/assets/chassis.glb" />
      <Segments limit={6} lineWidth={2.0}>
        <Segment start={[0, 0, 0]} end={[10, 0, 0]} color={"red"} />
        <Segment start={[0, 0, 0]} end={[0, 10, 0]} color={"blue"} />
        <Segment start={[0, 0, 0]} end={[0, 0, 10]} color={"green"} />
        <Segment start={[0, 0, 0]} end={[-10, 0, 0]} color={[1, 0, 0]} />
        <Segment start={[0, 0, 0]} end={[0, -10, 0]} color={[0, 1, 0]} />
        <Segment start={[0, 0, 0]} end={[0, 0, -10]} color={[1, 1, 0]} />
      </Segments>
    </mesh>
  );
}

const VehPos = () => {
  return (
    <div className="VehPos">
      <Canvas>
        <OrbitControls />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.9} />

        <Mesh />
      </Canvas>
    </div>
  );
};

export default VehPos;
