import React from 'react';
import Task2CountriesItem from './Task2CountriesRow';

export default function Task2CountriesTable({countriesMembers}) {
    return (
        <div className="most-popular-countries">
            <table className="countries" cellPadding="3">
                <thead>
                    <tr>
                        <th>Country</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody>
                    {countriesMembers.map((member) =>
                        <Task2CountriesItem key={member.id} member={member}></Task2CountriesItem>
                    )}
                </tbody>
            </table>
        </div>
    )
}
