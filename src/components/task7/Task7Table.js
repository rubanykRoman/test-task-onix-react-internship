import React from 'react';
import Task7TableRow from './Task7TableRow';

export default function Task7Table({ finals, delItem, isActive}) {
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
                    <Task7TableRow
                        key={final.id}
                        final={final}
                        delItem={delItem}
                        isActive={isActive}>
                    </Task7TableRow>)}
            </tbody>
        </table>
    )
}
