import React, { useState, useEffect } from 'react';
import Task6List from './Task6List';
import './Task6.scss';
import Loading from '../../../../../components/Loading/Loading';
import NotFound from '../../../../../components/NotFound/NotFound';
import TaskCard from '../../../../../components/TaskCard';

export default function Task6() {

    const [quotes, setQuotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    function showAddInfo(quote) {
        alert(`Author: ${quote.author}, series: "${quote.series}"`)
    }

    useEffect(() => {
        setIsLoading(true);
        setError(null);

        fetch("https://www.breakingbadapi.com/api/quotes")
            .then((response) => {
                return response.json();
            })
            .then((data) =>  setQuotes(data) )
            .catch((err) => setError(err))
            .finally(() => setIsLoading(false))
    }, [])
    
    return (
        <div className="task-6">
            <TaskCard
                taskNumber="6"
                taskTitle="Breaking Bad ©"
            />
            {isLoading ? <Loading /> : <Task6List quotes={quotes} showAddInfo={showAddInfo} />}
            {error ? <NotFound /> : null }
        </div>
    )
}
