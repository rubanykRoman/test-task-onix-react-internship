import React from 'react';
import reactLogo from '../../assets/reactLogo.png';
import onixLogo from '../../assets/onixLogo.svg';
import './StartPage.scss'

export default function StartPage() {
    return (
        <div className="start-page">
            <div>
                <img src={onixLogo} alt="onix-logo-img " />
            </div>
            <div>
                <h2><i>React Internship</i></h2>
            </div>
            <div>
                <img src={reactLogo} alt="react-logo-img " />
            </div>
        </div>
    )
}
