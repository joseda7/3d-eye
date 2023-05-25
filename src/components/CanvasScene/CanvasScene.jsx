import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { Suspense } from 'react'
import './Canvas.scss'

const Model = () => {
  const obj = useLoader(OBJLoader, "Mario.obj");
  // console.log(obj);
  return <primitive object={obj} scale={0.4} />;
};

export default function CanvasScene() {
  return (
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
        <OrbitControls makeDefault />
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
  );
}
