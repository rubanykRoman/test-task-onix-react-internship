import React, { Component } from 'react'
import TrTable from './TableRow'

export default class Task5 extends Component {

    state = {
        finals: [
            {
                match: {
                    year:2020,
                    winner: "Bayern Munich",
                    finalist: "PSG",
                }
            },
            {
                 match: {
                    year:2019,
                     winner: "Liverpool",
                     finalist: "Tottenham Hotspur",
                }
             },
            {
                match: {
                     year:2018,
                    winner: "Real Madrid",
                    finalist: "Liverpool",
              }
            },
            {
                match: {
                     year:2017,
                    winner: "Real Madrid",
                    finalist: "Juventus",
              }
            },
            {
                match: {
                     year:2016,
                    winner: "Real Madrid",
                    finalist: "Atletico Madrid",
                 }
            },
        ],
    }
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Winner</th>
                        <th>Finalist</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.finals.map((item) => <TrTable key = {this.state.finals.year} item = {item}></TrTable>)};
                </tbody>
            </table>
        )
    }
}
