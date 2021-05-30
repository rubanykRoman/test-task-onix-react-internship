import React from 'react';
import PropTypes from 'prop-types';

const Task3Row = ({item}) => {
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

export default Task3Row;