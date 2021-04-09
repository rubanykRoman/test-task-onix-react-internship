import React from 'react';
import PropTypes from 'prop-types';

export default function Task6ListItem({quoteObj,showAddInfo}) {
    return (
        <li onClick={() => showAddInfo(quoteObj)}>{quoteObj.quote}</li>
    )
}

Task6ListItem.propTypes = {
    quoteObj: PropTypes.object,
    showAddInfo: PropTypes.func,
}