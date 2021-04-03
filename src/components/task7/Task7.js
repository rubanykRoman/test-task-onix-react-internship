import React, { Component } from 'react';
import Task7Table from './Task7Table';
import './Task7.scss';

export default class Task7 extends Component {
    state = {
        finals: [
            {
                id: 1,
                year: 2020,
                winner: "Bayern Munich",
                finalist: "PSG",
                flag: false,
            },
            {
                id: 2,
                year: 2019,
                winner: "Liverpool",
                finalist: "Tottenham Hotspur",
                flag: false,
            },
            {
                id: 3,
                year: 2018,
                winner: "Real Madrid",
                finalist: "Liverpool",
                flag: false,
            },
            {
                id: 4,
                year: 2017,
                winner: "Real Madrid",
                finalist: "Juventus",
                flag: false,
            },
            {
                id: 5,
                year: 2016,
                winner: "Real Madrid",
                finalist: "Atletico Madrid",
                flag: false,
            },
        ],
    }

    delItem = (id) => {
    this.setState({
            finals: this.state.finals.filter((item) => item.id !== id),
        });
    }

    isActive = (final) => {
        final.flag = !final.flag
        this.setState({...this.state.finals, final})
    }

    handleKeyPress = (event) => {
        const { finals } = this.state;

        if(event.key == '1'){
            finals[0].flag = !finals[0].flag;
            }
        if(event.key == '2'){
            finals[1].flag = !finals[1].flag;
            }
        if(event.key == '3'){
            finals[2].flag = !finals[2].flag;
            }
        this.setState({...this.state.finals})       
    }
    
    render() {
        const { finals } = this.state;
        return (
            <div tabIndex="1" onKeyPress={this.handleKeyPress} className="task-7">
                <h3>Task 7</h3>
                <h4>Finals of Champions League</h4>
                <Task7Table finals={finals} delItem={this.delItem} isActive={this.isActive}/>
            </div>
        )
    }
}
