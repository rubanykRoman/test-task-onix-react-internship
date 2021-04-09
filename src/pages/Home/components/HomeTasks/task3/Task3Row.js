import React from 'react';
import PropTypes from 'prop-types';

export default function Task3Row({item}) {
    return (
        <tr>
            <td>
                {item}
            </td>
        </tr>    
    )
}

Task3Row.propTypes = {
    item: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number]),
}