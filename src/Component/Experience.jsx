import { OrbitControls, PerspectiveCamera, ScrollControls, useHelper, useScroll } from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { Crystal } from "./Crystal";
import { useControls } from "leva";
import { DirectionalLightHelper } from "three";
import Overlay from "./Overlay";

const Experience = ({top}) => {
const directionalPurple = useRef()
const directionalPink = useRef()
const directionalWhite = useRef()

// useHelper(directionalPurple, DirectionalLightHelper, 5, "purple")

  return (
    <>
      {/* <OrbitControls /> */}
      {/* <PerspectiveCamera makeDefault={false} far={1000} near={0.1} fov={53.702} position={[-18.127, 22.503, 165.837]} rotation={[-0.195, -0.034, -0.007]} /> */}
      <PerspectiveCamera makeDefault far={1000} near={0.1} fov={53.702} position={[0,40,170]} rotation={[-0.3,0,0]} />
      <directionalLight color={"#6d00fb"} ref={directionalPurple} intensity={5} position={[160, 16, -40]}/>
      <directionalLight color={"#9e00c6"} ref={directionalPink} intensity={5} position={[0,70,-100]}/>
      <directionalLight color={"#fff"} ref={directionalWhite} intensity={2} position={[36, 20, -80]}/>
      <ScrollControls pages={5} damping={0.25}>
      <Crystal top={top}/>
      </ScrollControls>
    </>
  );
};

export default Experience;
