import React, { Component } from 'react'
import Task4TableRow from './Task4TableRow'

export default class Task4Table extends Component {
    render() {
        const finals = this.props.finals;
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
                    {finals.map((final) => <Task4TableRow key = {final.id} final = {final}></Task4TableRow>)}
                </tbody>
            </table>
        )
    }
}
