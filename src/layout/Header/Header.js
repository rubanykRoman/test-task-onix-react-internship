import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => 
    <div className="header-links">
        <div><Link to="/">StartPage</Link></div>
        <div><Link to="/hometasks">HomeTasks</Link></div> 
        <div><Link to="/testtask">TestTask</Link></div>
    </div>

export default Header;