import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLinks.scss';

export default function HeaderLinks() {
    return (
        <div className="header-links">
            <div><Link to="/">StartPage</Link></div>
            <div><Link to="/hometasks">HomeTasks</Link></div> 
            <div><Link to="/testtask">TestTask</Link></div>
        </div>
    )
}
