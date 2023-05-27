import { Suspense } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Scene from '../../molecules/Scene/Scene' 
import Loader from '../../atoms/Loader/Loader'
import PanelElements from '../../molecules/PanelElements/PanelElements'
import PanelControls from '../../molecules/PanelControls/PanelControls'
import './CanvasScene.scss'

const CanvasScene = () => {

  const MouseControls = () => {
    const { camera } = useThree();

    // const handleZoomIn = (factor) => {
    //   camera.position.x = camera.position.x * factor;
    //   camera.position.y = camera.position.y * factor;
    //   camera.position.z = camera.position.z * factor;
    // }

    // return (
      // <button onClick={()=>handleZoomIn(2)}>
      //   +
      // </button>
    // )
  }

  return (
      <>
        <Canvas>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <OrbitControls makeDefault/>
          <MouseControls/>
          <Suspense fallback={<Loader/>}>
            <Scene />
          </Suspense>
        </Canvas>
        <div className='origin'></div>
        <PanelElements/>
        <PanelControls/>
        {/* <button onClick={()=>handleZoomIn(2)}>
          +
        </button> */}
      </>
  );
}

export default CanvasScene