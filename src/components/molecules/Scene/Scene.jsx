import { useLoader } from '@react-three/fiber'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
// import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader'
// import { Group } from 'three'

function loadModels (_models) {
    let loadedModels = [];
    for (let i = 0; i < _models.length; i++) {
        let typeFile = _models[i].split(".")[1]; 
        switch (typeFile) {
            case 'obj':
                loadedModels.push(useLoader(OBJLoader, _models[i])); 
                break;
            case 'gltf':
                loadedModels.push(useLoader(GLTFLoader, _models[i]).scene); 
                break;
            // case 'stl':
            //     loadedModels.push(new Group(useLoader(STLLoader, _models[i])));
            //     break;
            // case 'ply':
            //     loadedModels.push(new Group(useLoader(PLYLoader, _models[i])));
            //     break;
            default: break;
        }
    } 
    return loadedModels;  
}

const Scene = () => {
    const models = ['/Mario.obj', '/ObjTest.obj', '/CharacterPumpkin.gltf', '/Dragon.stl', '/Nebula.ply' ];
    let loadedModels = loadModels(models);
    // console.log(loadedModels, "loadedModels");
    return (
        loadedModels.length > 0 && loadedModels.map((model, index) => {
            return <primitive object={model} scale={0.4} key={index}/>
        })
    )
};

export default Scene