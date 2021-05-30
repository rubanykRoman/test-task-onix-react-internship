import React from 'react';
import PropTypes from 'prop-types';
import Task5TableRow from './Task5TableRow';


const Task5Table = ({ finals, delItem}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Winner</th>
                    <th>Finalist</th>
                    <th>Del item</th>
                </tr>
            </thead>
            <tbody>
                {finals.map((final) =>
                    <Task5TableRow
                        key={final.id}
                        final={final}
                        delItem={delItem}>
                    </Task5TableRow>)}
            </tbody>
        </table>
    )
}

Task5Table.propTypes = {
    finals: PropTypes.array,
    delItem: PropTypes.func,
}

export default Task5Table;