import React, { Component } from 'react'

export default class TrTable extends Component {
    render() {
        return (
             <tr>
                    {<td key={this.props.item.match.year}>{this.props.item.match.year}</td>}
                    {<td key={this.props.item.match.year}>{this.props.item.match.winner}</td>}
                    {<td key={this.props.item.match.year}>{this.props.item.match.finalist}</td>}
             </tr>
        )
    }
}
