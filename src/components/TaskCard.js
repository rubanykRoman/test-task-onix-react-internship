import React from 'react'

export default function TaskCard({ taskNumber, taskTitle }) {
    return (
        <div>
            <h3>{`Task - ${taskNumber}`}</h3>
            <h4>{taskTitle}</h4>
        </div>
    )
}
