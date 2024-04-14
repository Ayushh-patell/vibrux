import { Canvas } from '@react-three/fiber';
import './App.css';
import Experience from './Component/Experience';
import Overlay from './Component/Overlay';
import { useState } from 'react';

function App() {

  const [top, settop] = useState(false)
  return (
    <>
    <div className=' w-full h-screen fixed top-0 left-0 '>
    <Canvas>
      <Experience top={top}/>
    </Canvas>
    </div>
    <Overlay settop={settop} top={top}/>

</>
  );
}

export default App;
