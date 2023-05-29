import React, { useEffect, useRef } from 'react';
import { useThree, extend, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = ({ updatedCamera }) => {

    const { updatedZoom, updatedRotation } = updatedCamera;
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useEffect(() => {
        if (updatedZoom) {
            camera.zoom = updatedZoom;
            console.log(camera.zoom, "Zoom new value");
        }
        if (updatedRotation) {
            camera.rotation.x += updatedRotation;
        }
        // console.log(camera, "Camera");
    }, [updatedCamera]);

    return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default CameraControls;