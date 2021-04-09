import React from 'react';
import PropTypes from 'prop-types';

export default function Task2MemberListItem({ name }) {
    return (
        <li>
            {name}
        </li>
    )
}

Task2MemberListItem.propTypes = {
    name: PropTypes.string,
}