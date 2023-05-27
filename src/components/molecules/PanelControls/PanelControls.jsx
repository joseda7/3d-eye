import Icon from '../../atoms/Icon/Icon'
import './PanelControls.scss'

const PanelControls = (props) => {
  return (
    <section className="panelControls">

        <button data-hover="About">
            <Icon id='info' />
        </button> 

        <button data-hover="Zoom out">
            <Icon id='minus' />
        </button>

        <div> 100% </div>

        <button data-hover="Zoom in">
            <Icon id='plus' />
        </button> 

        <button data-hover="Rotate X">
            <Icon id='rotate-x' />
        </button> 

        <button data-hover="Rotate Y">
            <Icon id='rotate-y' />
        </button> 

        <button data-hover="Rotate Z">
            <Icon id='rotate-z' />
        </button> 
    </section>
  )
}

export default PanelControls
