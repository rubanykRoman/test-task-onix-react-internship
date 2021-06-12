import React from 'react';
import PropTypes from 'prop-types';

const Task5TableRow = ({
  final: {
    id, year, winner, finalist 
  }, delItem 
}) => {
  const onDelBtnClick = (e) => {
    delItem(id);
  };

  return (
    <tr>
      <td>{year}</td>
      <td>{winner}</td>
      <td>{finalist}</td>
      <td><button onClick={onDelBtnClick}>del</button></td>
    </tr>
  );
};

Task5TableRow.propTypes = {
  final: PropTypes.object,
  delItem: PropTypes.func,
};

export default Task5TableRow;
