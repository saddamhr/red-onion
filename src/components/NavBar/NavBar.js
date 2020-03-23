import React from 'react';
import './NavBar.css'
import logo from '../../images/logo.png'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div className='LeftNav'>
                <img src={logo} alt=""/>
            </div>
            <div className='RightNav'>
                {/* cart icon */}
                <span className='login'>Login</span>
                {/* <button className='login'>Login</button> */}
                <button className='signup-btn'>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;