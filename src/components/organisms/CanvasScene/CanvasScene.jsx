import { Suspense, useRef, useState } from 'react'
// import { AxesHelper } from 'three'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Html } from '@react-three/drei'
// import { Html } from '@react-three/drei'
import Scene from '../../molecules/Scene/Scene' 
import Loader from '../../atoms/Loader/Loader'
import PanelElements from '../../molecules/PanelElements/PanelElements'
import PanelControls from '../../molecules/PanelControls/PanelControls'
import './CanvasScene.scss'

const CanvasScene = () => {
  // const { camera } = useThree();
  const [zPosition, setZPosition] = useState(0);
  // const controlsRef = useRef();

  return (
      <>
        <Canvas 
          camera={{ position: [5, 5, 5] }}>
          <ambientLight intensity={0.1}/>
          <directionalLight color="orange" position={[0, 10, 10]} />
          <OrbitControls makeDefault/>
          <Suspense fallback={<Loader/>}>
            <Scene />
            <axesHelper args={[1]}/>
            <PanelControls/>
          </Suspense>
        </Canvas>
        <PanelElements/>
        {/* <div className='origin'></div> */}
      </>
  );
}

export default CanvasScene