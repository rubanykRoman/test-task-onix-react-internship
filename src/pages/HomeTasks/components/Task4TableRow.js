import React from 'react';
import PropTypes from 'prop-types';

const Task4TableRow = ({ final: { year, winner, finalist } }) => (
  <tr>
    {<td>{year}</td>}
    {<td>{winner}</td>}
    {<td>{finalist}</td>}
  </tr>
);

Task4TableRow.propTypes = {
  final: PropTypes.object,
};

export default Task4TableRow;
