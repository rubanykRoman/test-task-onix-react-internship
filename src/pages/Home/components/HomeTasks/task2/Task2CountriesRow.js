import React from 'react';
import PropTypes from 'prop-types';

export default function Task2CountriesRow({member:{country, quantity}}) {
    return (
        <tr>
            <td>{country}</td>
            <td>{quantity}</td>
        </tr>
    )
}

Task2CountriesRow.propTypes = {
    member: PropTypes.object,
}