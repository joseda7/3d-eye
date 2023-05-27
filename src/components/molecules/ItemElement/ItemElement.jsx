import Icon from "../../atoms/Icon/Icon"
import './ItemElement.scss'

const ItemElement = ({name, isVisible, onHide}) => {
  return ( 
    <div className='itemElement'>
      <button onClick={onHide}> 
        { isVisible ? (
            <Icon id='visible'/>
          ):
            <Icon id='invisible'/>
        }
      </button>
      <p>{name}</p>
    </div>
  )
}

ItemElement.propTypes = {}

export default ItemElement
