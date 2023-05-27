import { useState, useContext } from 'react'
import { SceneContext } from '../../../context/sceneContext'
import Icon from '../../atoms/Icon/Icon'
import './PanelElements.scss'
import ItemElement from '../ItemElement/ItemElement'

const PanelElements = () => {

  const { theScene, setTheScene } = useContext(SceneContext);
  
  const [isOpen, setIsOpen] = useState(true);

  const handleOnHide = (element, index) => {
    const updatedElement = {
      ...element, 
      isVisible: !element.isVisible
    }
    const newScene = theScene.map((element, id) => (id === index ? updatedElement : element));
    newScene && setTheScene(newScene); // Update the Scene Context
  } 

  return (
    <section className={'panelElements ' + (isOpen ? 'panelElements--open' : '')}>
        <div className='panelElements__head'>
            <button
              onClick={()=>{ setIsOpen(!isOpen) }}>
                <Icon id='arrow-down' addClass={isOpen ? 'icon--rotate' : ''} />
            </button>
            <span> Elements </span>
        </div>
        {
          theScene && theScene.map((item, index)=>{
              return (
                  <ItemElement 
                    key = {index}
                    name = {item.src.split("/")[1]}
                    isVisible = {item.isVisible}
                    onHide = {() => handleOnHide(item, index)}
                  />
              )
            
          })
        }
    </section>
  )
}

export default PanelElements
