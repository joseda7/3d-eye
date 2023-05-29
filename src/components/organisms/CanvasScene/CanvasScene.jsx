import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ModelsScene from '../../molecules/ModelsScene/ModelsScene' 
import Loader from '../../atoms/Loader/Loader'
import PanelElements from '../../molecules/PanelElements/PanelElements'
import PanelControls from '../../molecules/PanelControls/PanelControls'
import CameraControls from '../../molecules/CameraControls/CameraControls'
import './CanvasScene.scss'

const CanvasScene = () => {

  const [updatedZoom, setUpdatedZoom] = useState(1);
  const [updatedRotation, setUpdatedRotation] = useState(0);
  
  const handleZoomOut = () => {
    if (updatedZoom <= 1) {
      updatedZoom >= 0 && setUpdatedZoom(updatedZoom - 0.1); 
    } else {
      setUpdatedZoom(updatedZoom - 1); 
    }
    console.log("Zoom Out");
  };
  
  const handleZoomIn = () => {
    setUpdatedZoom(updatedZoom + 1); 
    console.log("Zoom In");
  };

  const handleRotation = () => {
    setUpdatedRotation(updatedRotation); // Pending
  } 

  return (
      <>
        <Canvas 
          camera={{ position: [10, 10, 10] }}>
          
          <ambientLight 
            intensity={0.1}/>
          
          <directionalLight 
            color="orange" 
            position={[0, 10, 10]} />
          
          <CameraControls 
            updatedCamera={{
              updatedZoom,
              updatedRotation
            }}/>
    
          <Suspense 
            fallback={<Loader/>}>
            <ModelsScene />
            <axesHelper 
              args={[2]}/>
          </Suspense>
        
        </Canvas>
        
        <PanelControls 
          controls={{
            updatedZoom,
            handleZoomIn,
            handleZoomOut,
            handleRotation
          }}
        />

        <PanelElements/>
        {/* <div className='origin'></div> */}
      </>
  );
}

export default CanvasScene