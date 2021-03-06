import React, { Component } from 'react'
import './Task6.css'

export default class Task6 extends Component {

    state = {
        quotes: [],
    }
    
    showAuthor (quote) {
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
                <ol>
                    {quotes.map((quoteObj) => (
                        <li key={quoteObj.quote_id} onClick={() => this.showAuthor(quoteObj)}>{quoteObj.quote}</li>
                    ))}
                </ol>
            </div>
        )
    }
}
