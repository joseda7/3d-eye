import { createContext, useEffect, useState } from 'react'
import { MODELS } from '../constants';

export const SceneContext = createContext();

export const SceneProvider = ({children}) => {
    
    const [theScene, setTheScene] = useState(MODELS);

    useEffect(() => {
        console.log("Context changed!", theScene);
    }, [theScene])

    return (
        <SceneContext.Provider value={{theScene, setTheScene}}>
            { children }
        </SceneContext.Provider>
    ) 
}