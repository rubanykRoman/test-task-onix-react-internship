import React from 'react';
import PropTypes from 'prop-types';
import Task6ListItem from './Task6ListItem';

const Task6List = ({ quotes, showAddInfo }) => (
  <ol>
    {quotes.map((quoteObj) => (
      <Task6ListItem
        key={quoteObj.quote_id}
        quotes={quotes}
        showAddInfo={showAddInfo}
        quoteObj={quoteObj}
      />
    ))}
  </ol>
);

Task6List.propTypes = {
  quotes: PropTypes.array,
  showAddInfo: PropTypes.func,
};

export default Task6List;
