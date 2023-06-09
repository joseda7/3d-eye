import { useContext } from 'react'
import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { SceneContext } from '../../../context/sceneContext'
import { getFileNameFromUrl } from '../../../utilities/utilities'
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
// import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
// import { Group } from 'three'

const ModelsScene = () => {

    const { theScene } = useContext(SceneContext);
    const loadModels = (_models) => {
        let loadedModels = [];
        for (let i = 0; i < _models.length; i++) { 
            if (_models[i].isVisible) {
                const typeFile = getFileNameFromUrl(_models[i].src).type; 
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
    // const loadedModels = useLoader(OBJLoader, ['Mario.obj', 'ObjTest.obj']);
    console.log("Loaded Models", loadedModels);

    return (
        loadedModels.length > 0 && loadedModels.map((item, index) => {
            return <primitive object={item} scale={1} key={index}/>
        })
    )
};

export default ModelsScene;