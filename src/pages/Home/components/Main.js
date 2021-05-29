import React from 'react';
import main from '../../../assets/main.png';

export default function Main() {
    return (
        <main>
            <div className="main">
            <h1 className="main__project-name"><strong><span>Support the animals!</span></strong></h1>
            <p className="main__project-description">Register and participate in the volunteer support program for stray animals <br></br> at our shelter this weekend with your family or team</p>
            <div className="main__buttom-wrap">
                <button className="join-button"><span className="join">Join Us</span></button>
            </div>
            <div className="main__bg-img">
                <img src={main} alt="main-img " />
            </div>
            </div>
        </main>
    )
}
