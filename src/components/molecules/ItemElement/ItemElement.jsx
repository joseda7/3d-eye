import Icon from "../../atoms/Icon/Icon"
import './ItemElement.scss'

const ItemElement = ({name, isVisible, onHide}) => {
  return ( 
    <div className='itemElement'>
        { isVisible ? (
          <button onClick={onHide} data-hover="Hide"> 
            <Icon id='visible'/>
          </button>
          ):
          <button onClick={onHide} data-hover="Show" className='--opacity'> 
            <Icon id='invisible'/>
          </button>
        }
      <p className={!isVisible ? '--opacity':''}> {name} </p>
    </div>
  )
}

ItemElement.propTypes = {}

export default ItemElement
