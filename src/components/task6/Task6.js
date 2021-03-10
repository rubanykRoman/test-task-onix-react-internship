import React, { Component } from 'react'
import Task6List from './Task6List'
import './Task6.css'


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
            <div>
                <h1>Task-6</h1>
                <h3>Breaking Bad ©</h3>
                <Task6List quotes={quotes} showAddInfo={this.showAddInfo}></Task6List>
            </div>
        )
    }
}
