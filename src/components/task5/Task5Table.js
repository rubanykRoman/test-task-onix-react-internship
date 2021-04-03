import React from 'react';
import Task5TableRow from './Task5TableRow';

export default function Task5Table({ finals, delItem}) {
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
