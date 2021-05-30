import React, { useState } from 'react';
import Task5Table from './Task5Table';
import './Task5.scss';
import TaskCard from '../../../../../components/TaskCard';

const Task5 = () => {

    const [finals, setFinals] = useState([
        {
            id: 1,
            year: 2020,
            winner: "Bayern Munich",
            finalist: "PSG",
        },
        {
            id: 2,
            year: 2019,
            winner: "Liverpool",
            finalist: "Tottenham Hotspur",
        },
        {
            id: 3,
            year: 2018,
            winner: "Real Madrid",
            finalist: "Liverpool",
        },
        {
            id: 4,
            year: 2017,
            winner: "Real Madrid",
            finalist: "Juventus",
        },
        {
            id: 5,
            year: 2016,
            winner: "Real Madrid",
            finalist: "Atletico Madrid",
        },
    ]);

    const delItem = (id) => {
        setFinals(
            finals.filter((item) => item.id !== id)
        );
    }

    return (
        <div className="task-5">
            <TaskCard
                taskNumber="5"
                taskTitle="Finals of Champions League"
            />
            <Task5Table finals={finals} delItem={delItem} />
        </div>
    )
}

export default Task5;