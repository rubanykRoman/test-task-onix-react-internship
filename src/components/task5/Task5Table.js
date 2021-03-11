import React, { Component } from 'react'
import Task5TableRow from './Task5TableRow'

export default class Task5Table extends Component {
    render() {
        const finals = this.props.finals;
        return (
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Winner</th>
                        <th>Finalist</th>
                        <th>Del item</th>
                    </tr>
                </thead>
                <tbody>
                    {finals.map((final) =>
                        <Task5TableRow
                            key={final.id}
                            final={final}
                            delItem={this.props.delItem}>
                        </Task5TableRow>)}
                </tbody>
            </table>
        )
    }
}
