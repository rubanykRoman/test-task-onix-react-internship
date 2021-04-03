import React from 'react';

export default function Task5TableRow({ final: { id, year, winner, finalist }, delItem }) {
    
    function onDelBtnClick (e) {
        delItem(id)
    }

    return (
        <tr>
            <td>{year}</td>
            <td>{winner}</td>
            <td>{finalist}</td>
            <td><button onClick={onDelBtnClick}>del</button></td>
        </tr>
    )
}

