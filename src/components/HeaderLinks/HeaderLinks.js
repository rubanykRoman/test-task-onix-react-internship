import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderLinks.scss';

export default function HeaderLinks() {
    return (
        <div className="header-links">
            <div><Link to="/">HomePage</Link></div>
            <div><Link to="/homeTasks">HomeTasks</Link></div>
        </div>
    )
}
