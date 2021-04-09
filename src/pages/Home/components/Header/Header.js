import React from 'react';
import logo from './logo.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">
            <a href="#"> <img src={logo} alt="logo" /></a>
            </div>
            <nav className="header__nav">
            <div className="nav-item"><a href="#">About</a></div>
            <div className="nav-item"><a href="#">Archive</a></div>
            <div className="nav-item"><a href="#">Donation</a></div>
            <div className="nav-item"><a href="#">Contact</a></div>
            </nav>
            <div className="header__autorization"><span>Log in</span></div>
        </header>
    )
}
