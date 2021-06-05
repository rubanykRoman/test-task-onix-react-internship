import React from 'react'

const TaskCard = ({ taskNumber, taskTitle }) => 
    <div>
        <h3>{`Task - ${taskNumber}`}</h3>
        <h4>{taskTitle}</h4>
    </div>


export default TaskCard 