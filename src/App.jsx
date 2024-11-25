import {
  Html,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import ScrollManager from "./components/ScrollManager";
import Scene from "./components/Scene";
import Over from "./components/Over";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import styled from "styled-components";
import OverHeader from "./components/Header";

export default function App() {
  const [sceneAn, setSceneAn] = useState(1)
  const [srcolltest, setSrcolltest] = useState(0)
  return (
    <Layout>
      <OverHeader srcolltest={srcolltest}/>
      <Canvas style={{ position: "absolute" }}>
        <ambientLight />
        <ScrollControls pages={5} damping={0.3}>
          <ScrollManager />
          {/* <Scene sceneAn={sceneAn}/> */}
          <Scroll html style={{ width: "100%", height:"100%" }}>
            <Over setSrcolltest={setSrcolltest} setSceneAn={setSceneAn}/>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </Layout>
  );
}

const Layout = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
`;