import React from "react";
// import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Gltf,
  OrbitControls,
  PerspectiveCamera,
  Segment,
  Segments,
} from "@react-three/drei";

function Mesh({ rot }) {
  return (
    <mesh rotation={rot}>
      <Gltf src="/assets/chassis.glb" />
      <Segments limit={6} lineWidth={2.0}>
        <Segment start={[0, 0, 0]} end={[10, 0, 0]} color={"red"} />
        {/* <Segment start={[0, 0, 0]} end={[0, 10, 0]} color={"blue"} /> */}
        <Segment start={[0, 0, 0]} end={[0, 0, 10]} color={"green"} />
        <Segment start={[0, 0, 0]} end={[-10, 0, 0]} color={[1, 0, 0]} />
        <Segment start={[0, 0, 0]} end={[0, -10, 0]} color={[0, 1, 0]} />
        <Segment start={[0, 0, 0]} end={[0, 0, -10]} color={[1, 1, 0]} />
      </Segments>
    </mesh>
  );
}

const VehPos = ({ posData }) => {
  const sensorData = posData.split()[0].split(",");
  const roll = sensorData[0];
  const pitch = sensorData[1];
  const yaw = sensorData[2];
  return (
    <div className="VehPos">
      <div className="VehPosLabel">
        <dl>
          <dt>Yaw</dt>
          <dd>{yaw} deg</dd>
        </dl>
        <dl>
          <dt>Pitch</dt>
          <dd>{pitch} deg</dd>
        </dl>
        <dl>
          <dt>Roll</dt>
          <dd>{roll} deg</dd>
        </dl>
      </div>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 20]} fov={45} />
        {/* <OrbitControls /> */}
        <directionalLight intensity={1} />
        <spotLight position={[-10, 15, 10]} angle={0.9} />
        <spotLight position={[10, -15, -10]} angle={0.9} />

        <mesh position={[-1, -2, 0]} rotation={[25.6, -15, 0]}>
          {/* 1 = 45deg */}
          <Mesh rot={[pitch, roll, yaw]} />
        </mesh>
      </Canvas>
    </div>
  );
};

export default VehPos;
