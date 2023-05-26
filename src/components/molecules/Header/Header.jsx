import React from 'react'
import Logo from '/logo.svg'
import Icon from '../../atoms/Icon/Icon'
import './Header.scss'

const Header = () => {
     
    return (    
        <header className="header"> 
            <img className="header__logo" src={ Logo } alt="Logo 3D eye"/>
            <a href="https://github.com/joseda7/3d-eye" target='_blank'>
                <Icon id='github'/>
                github.com/joseda7/3d-eye
            </a>
        </header>
    )
}

export default Header