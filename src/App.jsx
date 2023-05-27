import Header from './components/molecules/Header/Header'
import CanvasScene from './components/organisms/CanvasScene/CanvasScene'
import { SceneProvider } from './context/sceneContext'
const App = () => {

  return (
    <SceneProvider>
      <Header/>
      <CanvasScene/>
    </SceneProvider>
  )
}

export default App
