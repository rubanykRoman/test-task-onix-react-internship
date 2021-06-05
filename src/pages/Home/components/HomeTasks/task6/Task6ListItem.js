import React from 'react';
import PropTypes from 'prop-types';

const Task6ListItem = ({quoteObj,showAddInfo}) => 
    <li onClick={() => showAddInfo(quoteObj)}>{quoteObj.quote}</li>

Task6ListItem.propTypes = {
    quoteObj: PropTypes.object,
    showAddInfo: PropTypes.func,
}

export default Task6ListItem;