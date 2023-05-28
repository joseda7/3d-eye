import { useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import Icon from '../../atoms/Icon/Icon'
import './PanelControls.scss'
import { useState } from 'react';

const PanelControls = () => {

    const { camera } = useThree();
    const { 
        position, 
        rotation
    } = camera

    const [zPosition, setZPosition] = useState(position.z);

    const handleZoomIn = () => {
        position.x -= 1;
        position.y -= 1;
        position.z -= 1;
        setZPosition(position.z);
        console.log(camera);
    };

    const handleZoomOut = () => {
        position.x += 1;
        position.y += 1;
        position.z += 1;
        setZPosition(position.z);
    };

    const handleRotateX = () => {
        rotation.x += 1;
        console.log(camera);
    };  

    // const handleRotateRight = () => {
    
    // };

    // const handlePan = () => {
    //     camera.translateX(1);
    // };

  return (
    <Html>
        <section className="panelControls">
            <button data-hover="Zoom out" onClick={ handleZoomOut }>
                <Icon id='minus' />
            </button>

            <div> {Math.floor(zPosition)}% </div>

            <button data-hover="Zoom in" onClick={ position.z > 0 && handleZoomIn }>
                <Icon id='plus' />
            </button> 

            <button data-hover="Rotate X" onClick={handleRotateX}>
                <Icon id='rotate-x' />
            </button> 
            {/*
            <button data-hover="Rotate Y" onClick={handleZoomOut}>
                <Icon id='rotate-y' />
            </button> 

            <button data-hover="Rotate Z" onClick={handleZoomOut}>
                <Icon id='rotate-z' />
            </button>  */}

            <button data-hover="SOS" className='--disabled'>
                <Icon id='help' />
            </button> 
        </section>
    </Html>
  )
}

export default PanelControls
