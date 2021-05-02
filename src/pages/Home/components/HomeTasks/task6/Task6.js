import React, { Component } from 'react';
import Task6List from './Task6List';
import './Task6.scss';
import Loading from '../../../../../components/Loading/Loading'
import NotFound from '../../../../../components/NotFound/NotFound';

export default class Task6 extends Component {

    state = {
        quotes: [],
        isLoading: false,
        error: null,
    }
    
    showAddInfo (quote) {
        alert(`Author: ${quote.author}, series: "${quote.series}"`)
    }

    componentDidMount() {
        
        this.setState({ isLoading: true });
        this.setState({ error: null });

        fetch("https://www.breakingbadapi.com/api/quotes")
            .then((response) => {
                return response.json();
            })
            .then((data) => { this.setState({ quotes: data }) })
            .catch((err) => this.setState({ error: err }))
            .finally(() => this.setState({ isLoading: false }))
    }

    render() {
        const { quotes, isLoading, error } = this.state;
        return (
            <div className="task-6">
                <h3>Task-6</h3>
                <h4>Breaking Bad ©</h4>
                {isLoading ? <Loading /> : <Task6List quotes={quotes} showAddInfo={this.showAddInfo} />}
                {error? <NotFound /> : null }
            </div>
        )
    }
}
