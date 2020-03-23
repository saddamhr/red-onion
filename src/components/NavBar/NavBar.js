import React from 'react';
import './NavBar.css'
import logo from '../../images/logo.png'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div>
                {/* cart icon */}
                <button>Login</button>
                <button>Sign Up</button>
            </div>
        </div>
    );
};

export default NavBar;