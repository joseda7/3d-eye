import { useContext } from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { SceneContext } from '../../../context/sceneContext'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
import { Group } from 'three'

const Scene = () => {
    const { theScene } = useContext(SceneContext);

    const loadModels = (_models) => {
        let loadedModels = [];
        for (let i = 0; i < _models.length; i++) { 
            if (_models[i].isVisible) {
                let typeFile = _models[i].src.split(".")[1]; 
                switch (typeFile) {
                    case 'obj':
                        loadedModels.push(useLoader(OBJLoader, _models[i].src)); 
                        break;
                    case 'gltf':
                        loadedModels.push(useLoader(GLTFLoader, _models[i].src).scene); 
                        break;
                    case 'stl':
                        // loadedModels.push(new Group(useLoader(STLLoader, _models[i])));
                        break;
                    case 'ply':
                        // loadedModels.push(new Group(useLoader(PLYLoader, _models[i])));
                        break;
                    default: break;
            }
        }} 
        return loadedModels;  
    }


    const loadedModels = loadModels(theScene);
    // const loadedModels = useLoader(OBJLoader, 'Mario.obj', 'CharacterPumpkin.gltf', 'ObjTest.obj');

    console.log(loadedModels, "loadedModels");
    return (
        loadedModels.length > 0 && loadedModels.map((item, index) => {
            return <primitive object={item} scale={0.4} key={index}/>
        })
    )
};

export default Scene

