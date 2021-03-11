import React, { Component } from 'react'

export default class Task5TableRow extends Component {

    onDelBtnClick = (e) => {
        e.stopPropagation();

        this.props.delItem(this.props.final.id)
    }

    render() {
        const final = this.props.final;
        return (
             <tr>
                <td>{final.year}</td>
                <td>{final.winner}</td>
                <td>{final.finalist}</td>
                <td><button onClick={this.onDelBtnClick}>del</button></td>
             </tr>
        )
    }
}
