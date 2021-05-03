import React, { Component } from 'react';
import Task7List from './Task7List';
import './Task7.scss';

export default class Task7 extends Component {
    state = {
        finals: [
            {
                id: 1,
                year: 2020,
                winner: "Bayern Munich",
                finalist: "PSG",
                flagActive: false,
                flagSelected: false,
            },
            {
                id: 2,
                year: 2019,
                winner: "Liverpool",
                finalist: "Tottenham Hotspur",
                flagActive: false,
                flagSelected: false,
            },
            {
                id: 3,
                year: 2018,
                winner: "Real Madrid",
                finalist: "Liverpool",
                flagActive: false,
                flagSelected: false,
            },
            {
                id: 4,
                year: 2017,
                winner: "Real Madrid",
                finalist: "Juventus",
                flagActive: false,
                flagSelected: false,
            },
            {
                id: 5,
                year: 2016,
                winner: "Real Madrid",
                finalist: "Atletico Madrid",
                flagActive: false,
                flagSelected: false,
            },
        ],
    }

    delItem = (id) => {
        this.setState({ finals: this.state.finals.filter((item) => item.id !== id) });
    }

    flagToggle = (id, e) => {
        const { finals } = this.state;
        const item = finals.find((l) => l.id === id);
        let newItem;

        if (e.type === 'click' || e.type === 'keypress') {
            newItem = { ...item, flagActive: !item.flagActive};
        }

        if (e.type === 'dragstart' || e.type === 'dragend' ) {
            newItem = { ...item, flagSelected: !item.flagSelected};
        }
    
        this.setState( ({finals}) => ({ finals: finals.map((item) => item.id !== id ? item : newItem)}) )
    }

    handleKeyPress = (e) => {
        const { finals } = this.state;
        const key = e.key;

        const targetFinal = finals[key - 1];
        const keys = [1,2,3,4,5,6,7,8,9]

        for (let i = 0; i < keys.length && i < finals.length; i++){
            if (key == keys[i]){
                this.flagToggle(targetFinal.id, e)
                break;
            }   
        }
    }
    
    render() {
        const { finals } = this.state;
        
        return (
            <div tabIndex="1" onKeyPress={this.handleKeyPress} className="task-7">
                <h3>Task 7</h3>
                <h4>Finals of Champions League</h4>
                <Task7List
                    finals={finals}
                    delItem={this.delItem}
                    flagToggle={this.flagToggle}>
                </Task7List>
            </div>
        )
    }
}