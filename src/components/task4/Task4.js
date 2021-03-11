import React, { Component } from 'react'
import Task4Table from './Task4Table'
import './Task4.scss'

export default class Task4 extends Component {

    state = {
        finals: [
            {
                id:1,
                year:2020,
                winner: "Bayern Munich",
                finalist: "PSG",
            },
            {
                id:2,
                 year:2019,
                 winner: "Liverpool",
                finalist: "Tottenham Hotspur",
             },
            {
                id:3,
                year:2018,
                winner: "Real Madrid",
                finalist: "Liverpool",
            },
            {
                id:4,
                year:2017,
                winner: "Real Madrid",
                finalist: "Juventus",
            },
            {
                id:5,
                year:2016,
                winner: "Real Madrid",
                finalist: "Atletico Madrid",
            },
        ],
    }

    // finals[2015] = {
    //         winner: "Barselona",
    //         finalist: "Juventus",
    //     }
    // delete finals[2015];

    // const wishes =  {
    //         2018: {
    //             winner: "Dynamo Kyiv",
    //             finalist: "Real Madrid",
    //         },
    //     }

    // finals = { ...finals, ...wishes };

    render() {
        const finals = this.state.finals;

        return (
            <div className="task-4">
                <h3>Task 4</h3>
                <h4>Finals of Champions League</h4>
                <Task4Table finals={finals} />
            </div>
        )
    }
}
