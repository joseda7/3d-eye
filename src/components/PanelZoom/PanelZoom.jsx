import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'
import './PanelZoom.scss'

const PanelZoom = (props) => {
  return (
    <section className="panelZoom">
        <button>
            <Icon id='minus' />
        </button>
        <div> 100% </div>
        <button>
            <Icon id='plus' />
        </button> 
    </section>
  )
}

PanelZoom.propTypes = {}

export default PanelZoom
