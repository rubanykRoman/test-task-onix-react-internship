import React from 'react';
import PropTypes from 'prop-types';

export default function Task7TableRow({final, final: { id, year, winner, finalist, flag}, delItem, isActive }) {
    
    function onDelBtnClick(e) {
        e.stopPropagation();

        delItem(id)
    }

    function onRowClick() {
        isActive(final)
    }

    return (
        <tr onClick={onRowClick}
            className={flag === true ? "active" : "not-active"}>
            <td>{year}</td>
            <td>{winner}</td>
            <td>{finalist}</td>
            <td><button onClick={onDelBtnClick}>del</button></td>
        </tr>
    )
}

Task7TableRow.propTypes = {
    final: PropTypes.object,
    delItem: PropTypes.func,
    isActive: PropTypes.func,
}

