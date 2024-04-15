import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import { Crystal } from "./Crystal";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Experience = () => {
const directionalPurple = useRef()
const directionalPink = useRef()
const directionalWhite = useRef()
const composer = useRef();

const { camera, gl, scene } = useThree();


useFrame((state) => {
directionalPurple.current.position.x = 160 -(200 * (Math.sin(state.clock.elapsedTime) * 0.03))
directionalPurple.current.position.y = 16 -(80 * (Math.sin(state.clock.elapsedTime) * 0.03))
directionalPurple.current.position.z =  -40 -(160* (Math.sin(state.clock.elapsedTime) * 0.03))

directionalPink.current.position.x = 0 -(160 * (Math.sin(state.clock.elapsedTime) * 0.3))
directionalPink.current.position.y = 70 -(80 * (Math.sin(state.clock.elapsedTime) * 0.3))
directionalPink.current.position.z =  -100 -(80* (Math.sin(state.clock.elapsedTime) * 0.3))

directionalWhite.current.position.x = 36 -(10 * (Math.sin(state.clock.elapsedTime) * 0.05))
directionalWhite.current.position.y = 20 -(10 * (Math.sin(state.clock.elapsedTime) * 0.05))
directionalWhite.current.position.z =  -80 -(200* (Math.sin(state.clock.elapsedTime) * 0.05))
})

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={53.702} position={[-18.127, 22.503, 165.837]} rotation={[-0.195, -0.034, -0.007]} /> */}
      <PerspectiveCamera  makeDefault far={1000} near={0.1} fov={53.702} position={[0,40,170]} rotation={[-0.3,0,0]} />
      <directionalLight color={"#6d00fb"} ref={directionalPurple} intensity={5} position={[160, 16, -40]}/>
      <directionalLight color={"#9e00c6"} ref={directionalPink} intensity={5} position={[0,70,-100]}/>
      <directionalLight color={"#fff"} ref={directionalWhite} intensity={2} position={[36, 20, -80]}/>
      <Crystal/>
      <EffectComposer ref={composer} args={[gl]}>
        {/* <Render attachArray="passes" scene={scene} camera={camera} /> */}
        <Bloom attachArray="passes" strength={5} />
      </EffectComposer>
    </>
  );
};

export default Experience;
