import React, { useContext } from 'react';
import { themeContext } from '../../../contexts/themeContext';
import logo from '../../../assets/logo.png';

const Header = () => {

    const {theme, changeTheme} = useContext(themeContext)

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
            <button onClick={changeTheme}>Change theme</button>
            <div className="header__autorization"><span>Log in</span></div>
        </header>
    )
}

export default Header;