import React, { Component } from 'react'
import Task6ListItem from "./Task6ListItem"

export default class Task6List extends Component {
    render() {
        return (
            <ol>
                {this.props.quotes.map((quoteObj) => (
                    <Task6ListItem
                        key={quoteObj.quote_id}
                        quotes={this.props.quotes}
                        showAddInfo={this.props.showAddInfo}
                        quoteObj={quoteObj}
                    ></Task6ListItem>
                ))}
            </ol>
        )
    }
}
