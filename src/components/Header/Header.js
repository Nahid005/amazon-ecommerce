import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='brand-logo'>
                <img src={logo} alt=""/>
            </div>
            <nav>
                <ul>
                    <li> <a href='#'> Home </a></li>
                    <li> <a href='#'> About </a></li>
                    <li> <a href='#'> Shop </a></li>
                    <li> <a href='#'> Contact </a></li>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;