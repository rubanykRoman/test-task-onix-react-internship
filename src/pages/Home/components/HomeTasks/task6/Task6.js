import React, { Component } from 'react';
import Task6List from './Task6List';
import './Task6.scss';

export default class Task6 extends Component {

    state = {
        quotes: [],
    }
    
    showAddInfo (quote) {
        alert(`Author: ${quote.author}, series: "${quote.series}"`)
    }

    componentDidMount () {

        fetch("https://www.breakingbadapi.com/api/quotes")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                this.setState({ quotes: data });
        });

    }

    render() {
        const { quotes } = this.state;
        return (
            <div className="task-6">
                <h3>Task-6</h3>
                <h4>Breaking Bad ©</h4>
                <Task6List quotes={quotes} showAddInfo={this.showAddInfo}></Task6List>
            </div>
        )
    }
}
