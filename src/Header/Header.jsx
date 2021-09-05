import './Header.css';
import React from 'react';
import Icon from './HeaderLogo';
import HeaderCartIcon from './HeaderCart';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-content'>
                <button className='header-menu header-btn'>
                    Menu
                </button>
                
                <div className='header-icon'>
                    <Icon />
                </div>

                <div className='header-who-are-we-cart header-btn'>
                    <button className='header-who-are-we header-btn'>Who We Are</button>
                    <div className='header-cart'>
                        <HeaderCartIcon />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
