import React from 'react';
import PropTypes from 'prop-types';
import Task2MemberListItem from './Task2MemberListItem';

const Task2MemberList = ({ names }) => (
  <div className="new-members">
    <h4>Last New members:</h4>
    <ul>
      {names.map((name) => (
        <Task2MemberListItem
          key={name}
          name={name}
        />
      ))}
    </ul>
  </div>
);

Task2MemberList.propTypes = {
  names: PropTypes.array,
};

export default Task2MemberList;
