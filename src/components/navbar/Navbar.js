import React from 'react'

import './Navbar.css';

const linkedIn = 'https://www.linkedin.com/in/mustafaihsankabakcili/';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-links">
            <c className="navbar-links__link"><a href={linkedIn} target='blank'>ABOUT US</a></c>
            <div className="navbar-links__link"><a href={linkedIn} target='blank'>FOR YOU</a></div>
            <div className="navbar-links__link"><a href={linkedIn} target='blank'>SERVICES</a></div>
            <div className="navbar-links__link"><a href={linkedIn} target='blank'>BLOG</a></div>
            <div className="navbar-links__link"><a href={linkedIn} target='blank'>VLOG</a></div>
            <div className="navbar-links__link"><a href={linkedIn} target='blank'>CONTACT</a></div>
        </div>
    </div>
  )
}

export default Navbar