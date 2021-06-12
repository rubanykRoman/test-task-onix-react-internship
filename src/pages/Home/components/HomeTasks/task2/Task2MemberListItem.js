import React from 'react';
import PropTypes from 'prop-types';

const Task2MemberListItem = ({ name }) => <li>{name}</li>;

Task2MemberListItem.propTypes = {
  name: PropTypes.string,
};

export default Task2MemberListItem;
