import React from 'react';

export default function Task2CountriesRow({member:{country, quantity}}) {
    return (
        <tr>
            <td>{country}</td>
            <td>{quantity}</td>
        </tr>
    )
}
