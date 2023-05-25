import Header from './components/Header/Header'
import PanelElements from './components/PanelElements/PanelElements'
import PanelZoom from './components/PanelZoom/PanelZoom'
import CanvasScene from './components/CanvasScene/CanvasScene'

const App = () => {

  return (
    <>
      <Header/>
      <CanvasScene/>
      <PanelElements/>
      <PanelZoom/>
    </>
  )
}

export default App
