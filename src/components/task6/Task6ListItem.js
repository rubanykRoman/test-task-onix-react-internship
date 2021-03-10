import React, { Component } from 'react'

export default class Task6ListItem extends Component {
    render() {
        const quoteObj = this.props.quoteObj;
        return (
            <li onClick={() => this.props.showAddInfo(quoteObj)}>{quoteObj.quote}</li>
        )
    }
}
