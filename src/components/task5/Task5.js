import React, { Component } from 'react'
import Task5Table from './Task5Table'
import './Task5.scss'

export default class Task5 extends Component {
    state = {
        finals: [
            {
                id: 1,
                year: 2020,
                winner: "Bayern Munich",
                finalist: "PSG",
            },
            {
                id: 2,
                year: 2019,
                winner: "Liverpool",
                finalist: "Tottenham Hotspur",
            },
            {
                id: 3,
                year: 2018,
                winner: "Real Madrid",
                finalist: "Liverpool",
            },
            {
                id: 4,
                year: 2017,
                winner: "Real Madrid",
                finalist: "Juventus",
            },
            {
                id: 5,
                year: 2016,
                winner: "Real Madrid",
                finalist: "Atletico Madrid",
            },
        ],
    }

    // delItem = (obj, item) => {
    // obj = { ...obj };
    // delete obj[item];
    // return obj
    // }

    // addItem = (obj, name, item) => {
    // obj = { ...obj };
    // obj[name] = item;
    // return obj
    // }

    delItem = (id) => {
     this.setState({
            finals: this.state.finals.filter((item) => item.id !== id),
        });
    }

    
     render() {
        const finals = this.state.finals;
        return (
            <div className="task-5">
                <h3>Task 5</h3>
                <h4>Finals of Champions League</h4>
                <Task5Table finals={finals} delItem={this.delItem} />
            </div>
        )
    }
}
