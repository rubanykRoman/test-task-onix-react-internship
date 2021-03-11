import React, { Component } from 'react'

export default class Task4TableRow extends Component {
    render() {
        const final = this.props.final;
        return (
             <tr>
                    {<td>{final.year}</td>}
                    {<td>{final.winner}</td>}
                    {<td>{final.finalist}</td>}
             </tr>
        )
    }
}
