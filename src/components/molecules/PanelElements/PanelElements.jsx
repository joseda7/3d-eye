import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icon from '../../atoms/Icon/Icon'
import './PanelElements.scss'

const PanelElements = (props) => {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <section className={'panelElements ' + (isOpen ? 'panelElements--open' : '')}>
        <div>
            <button
              onClick={()=>{ setIsOpen(!isOpen) }}>
                <Icon id='arrow-down' addClass={isOpen ? 'icon--rotate' : ''} />
            </button>
            <span> Elements </span>
        </div>
        <div className='separator'></div>
    </section>
  )
}

PanelElements.propTypes = {}

export default PanelElements
