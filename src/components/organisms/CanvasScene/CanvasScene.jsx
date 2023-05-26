import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../../molecules/Scene/Scene' 
import Loader from '../../atoms/Loader/Loader'
import PanelElements from '../../molecules/PanelElements/PanelElements'
import PanelZoom from '../../molecules/PanelZoom/PanelZoom'
import './CanvasScene.scss'

const CanvasScene = () => {
  return (
      <>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <OrbitControls makeDefault />
          <Suspense fallback={<Loader/>}>
            <Scene />
          </Suspense>
        </Canvas>
        <div className='origin'></div>
        <PanelElements/>
        <PanelZoom/>
      </>
  );
}

export default CanvasScene