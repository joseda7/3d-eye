import { useState } from 'react'
import Icon from '../../atoms/Icon/Icon'
import './PanelControls.scss'
import SvgEye from '/isotype.svg'
const PanelControls = ({controls}) => {

    const [isHelpOpen, SetIsHelpOpen] = useState(false);
    const {
        updatedZoom,
        handleZoomIn,
        handleZoomOut,
        handleRotation
    } = controls;

    return (
        <section className="panelControls">
            <button data-hover="Zoom out" onClick={ handleZoomOut }>
                <Icon id='minus' />
            </button>
            <div> 
                { Math.floor(updatedZoom) * 10 } % 
            </div>
            <button data-hover="Zoom in" onClick={ handleZoomIn }>
                <Icon id='plus' />
            </button> 

            <button data-hover="Rotate X" onClick={ handleRotation } className='--disabled' >
                <Icon id='rotate-x' />
            </button> 
            
            <button data-hover="Rotate Y" onClick={ handleRotation } className='--disabled'>
                <Icon id='rotate-y' />
            </button> 

            <button data-hover="Rotate Z" onClick={ handleRotation } className='--disabled'>
                <Icon id='rotate-z' />
            </button> 

            <button data-hover="Pan" onClick={ handleRotation } className='--disabled'>
                <Icon id='pan' />
            </button> 

            <button data-hover="SOS" onClick={ () => SetIsHelpOpen(!isHelpOpen) }>
                <Icon id='help' />
            </button> 

            { isHelpOpen && (
                <div className="help" onClick={ () => SetIsHelpOpen(!isHelpOpen)}>
                    <img src={ SvgEye } alt="Isotype 3DEye" />
                    <p> <b>3D-eye</b> is a visualizer that loads 3D models in the browser.</p>
                    <br/><br/>
                    <div className="help__body">
                        <div>
                            <Icon id='plus'/>
                            <Icon id='minus'/>
                            <h2> Zoom </h2>
                            <p> Use the mouse gestures or the UI buttons. </p>
                        </div>
                        <div>
                            <Icon id='rotate-x'/>
                            <Icon id='rotate-y'/>
                            <Icon id='rotate-z'/>
                            <h2> Rotate </h2>
                            <p> Use the mouse gestures <br/> <i>🪐 UI buttons coming soon.</i> </p>
                        </div>
                        <div>
                            <Icon id='pan'/>
                            <h2> Pan </h2>
                            <p> Use the mouse gestures. <br/> <i>🪐 UI buttons coming soon.</i> </p>
                        </div>
                        <div>
                            <Icon id='plus'/>
                            <h2> Add 3D models </h2>
                            <p> <i>🪐 Add .PLY, .STL files via API Coming soon.</i> </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default PanelControls
