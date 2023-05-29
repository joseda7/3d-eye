import { useState, useContext } from 'react'
import { SceneContext } from '../../../context/sceneContext'
import { getFileNameFromUrl } from '../../../utilities/utilities'
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
    newScene && setTheScene(newScene); // Updating the Scene Context
  } 

  return (
    <section className={'panelElements ' + (isOpen ? 'panelElements--open' : '')} >
        <div className='panelElements__head'>
            { isOpen ? (
              <button data-hover="Close panel" onClick={()=>setIsOpen(!isOpen)}>
                  <Icon id='arrow-down'/>
              </button>
            ):(
              <button data-hover="Show panel" onClick={()=>setIsOpen(!isOpen)}>
                  <Icon id='arrow-up'/>
              </button>
            )}
            <span> 3D Models </span>
        </div>
        <div className='panelElements__body'>
          {
            theScene && theScene.map((item, index)=>{
                return (
                    <ItemElement 
                      key = {index}
                      name = {getFileNameFromUrl(item.src).fullName}
                      isVisible = {item.isVisible}
                      onHide = {() => handleOnHide(item, index)}
                    />
                )
              
            })
          }
        </div>
        <button className='btnAdd --disabled' data-hover="Add new 3D model">
            <Icon id='plus' />
        </button> 
    </section>
  )
}

export default PanelElements
