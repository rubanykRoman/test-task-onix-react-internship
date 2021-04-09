import React from 'react';
import PropTypes from 'prop-types';

export default function Task4TableRow({final: {year, winner, finalist}}) {
    return (
        <tr>
            {<td>{year}</td>}
            {<td>{winner}</td>}
            {<td>{finalist}</td>}
        </tr>
    )
}

Task4TableRow.propTypes = {
    final: PropTypes.object,
}