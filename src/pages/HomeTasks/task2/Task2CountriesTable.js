import React from 'react';
import PropTypes from 'prop-types';
import Task2CountriesItem from './Task2CountriesRow';

const Task2CountriesTable = ({ countriesMembers }) => (
  <div className="most-popular-countries">
    <table className="countries" cellPadding="3">
      <thead>
        <tr>
          <th>Country</th>
          <th>Members</th>
        </tr>
      </thead>
      <tbody>
        {countriesMembers.map((member) => <Task2CountriesItem key={member.id} member={member} />)}
      </tbody>
    </table>
  </div>
);

Task2CountriesTable.propTypes = {
  countriesMembers: PropTypes.array,
};

export default Task2CountriesTable;
