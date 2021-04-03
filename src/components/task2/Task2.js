import React, { Component } from 'react'

export default class Task2 extends Component {

    state = {
        names: ["Stefani Germanotta", "Peter Parker", "Elon Musk", "James Howlett", "Bruce wayne"],
        countriesMembers: { "USA": 27002, "France": 9830,"Sweden":5219,"Ukraine":4450 },
    }

    render() {
        const { countriesMembers, names } = this.state;

        const country1 = "USA";
        const country2 = "France";
        const country3 = "Sweden";
        const country4 = "Ukraine";
        const members1 = countriesMembers.USA;
        const members2 = countriesMembers.France; 
        const members3 = countriesMembers.Sweden;
        const members4 = countriesMembers.Ukraine;
        
        return (
            <div className="main__dinamic-parts">
                <div className="new-members">
                    <h4>Last New members:</h4>
                    <ul>
                        <li>{names[0]}</li>
                        <li>{names[1]}</li>
                        <li>{names[2]}</li>
                        <li>{names[3]}</li>
                        <li>{names[4]}</li>
                    </ul>
                </div>
                <div className="most-popular-countries">
                    <table className="countries" cellPadding="3">
                        <thead>
                            <tr>
                                <th>Country</th>
                                <th>Members</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{country1}</td>
                            <td>{members1}</td>
                        </tr>
                        <tr>
                            <td>{country2}</td>
                            <td>{members2}</td>
                        </tr>
                        <tr>
                            <td>{country3}</td>
                            <td>{members3}</td>
                        </tr>
                        <tr>
                            <td>{country4}</td>
                            <td>{members4}</td>
                        </tr>
                    </tbody>                 
                    </table>
                </div>
            </div>
        )
    }
}
