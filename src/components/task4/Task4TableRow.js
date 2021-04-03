import React from 'react';

export default function Task4TableRow({final: {year, winner, finalist}}) {
    return (
        <tr>
            {<td>{year}</td>}
            {<td>{winner}</td>}
            {<td>{finalist}</td>}
        </tr>
    )
}
