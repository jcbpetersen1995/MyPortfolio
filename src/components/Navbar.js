import React from 'react';
import '../css/app.css';
import logo from '../images/JP.logo.tiny.png';


function Navbar() {
    return (
        <section className="navbar">
            <img src={logo} alt="JP Logo" className="logo"/>
        </section>
    )
};

export default Navbar;