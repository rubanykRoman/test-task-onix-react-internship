import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task2CountriesList from './Task2CountriesTable';
import Task2MemberList from './Task2MemberList';
import './Task2.scss';


export default class Task2 extends Component {

    state = {
        names: ["Stefani Germanotta", "Peter Parker", "Elon Musk", "James Howlett", "Bruce wayne"],
        countriesMembers: [
            { id: 1, country: "USA", quantity: 27002 },
            { id: 2, country: "France", quantity: 9830 },
            { id: 3, country: "Sweden", quantity: 5219 },
            { id: 4, country: "Ukraine", quantity: 4450 }],
    }

    render() {
        const { countriesMembers, names } = this.state;

        return (
            <div className="task-2">
                <Task2MemberList names={names}></Task2MemberList>
                <Task2CountriesList countriesMembers={countriesMembers}></Task2CountriesList>
            </div>
        )
    }
}