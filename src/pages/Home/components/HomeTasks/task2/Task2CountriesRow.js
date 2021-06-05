import React from 'react';
import PropTypes from 'prop-types';

const Task2CountriesRow = ({member:{country, quantity}})  => 
    <tr>
        <td>{country}</td>
        <td>{quantity}</td>
    </tr>


Task2CountriesRow.propTypes = {
    member: PropTypes.object,
}

export default Task2CountriesRow;