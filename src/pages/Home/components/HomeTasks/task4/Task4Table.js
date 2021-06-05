import React from 'react';
import PropTypes from 'prop-types';
import Task4TableRow from './Task4TableRow';

const Task4Table = ({finals}) => 
    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Winner</th>
                <th>Finalist</th>
            </tr>
        </thead>
        <tbody>
            {finals.map((final) => <Task4TableRow key = {final.id} final = {final}></Task4TableRow>)}
        </tbody>
    </table>

Task4Table.propTypes = {
    finals: PropTypes.array,
}

export default Task4Table;