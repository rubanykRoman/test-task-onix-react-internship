import React from 'react';
import PropTypes from 'prop-types';
import Task3Row from './Task3Row';

export default function Task3Tables({ withSortFoo, bubbleSort, years, quantity }) {
    return (
        <div className="tables">
            <table rules="3">
                <thead>
                    <tr>
                        <th onClick={withSortFoo}>Year</th>
                    </tr>
                </thead>
                <tbody>
                    {years.map((year) => (
                        <Task3Row key={year} item={year}></Task3Row>
                        ))}
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th onClick={bubbleSort}>Quantity</th>
                    </tr>
                </thead>
                    <tbody>
                    {quantity.map((quantity) => (
                        <Task3Row key={quantity} item={quantity}></Task3Row>
                        ))}
                </tbody>
            </table>
        </div>
    )
}

Task3Tables.propTypes = {
    withSortFoo: PropTypes.func,
    bubbleSort: PropTypes.func,
    years: PropTypes.array,
    quantity: PropTypes.array,
}
