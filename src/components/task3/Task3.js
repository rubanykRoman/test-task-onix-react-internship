import React, { Component } from 'react'

export default class Task3 extends Component {

    state = {
        years: ["2017", "2020", "2019", "2018", "2021"],
        quantity: [20456, 25876, 24200, 23263, 51004],
    }

    withSortFoo = () => {
        const { years} = this.state;
        
        years.sort((a, b) => a - b);
        console.log(years)
    };

    bubbleSort = () => {
        const {quantity } = this.state;

        for (let i = 0; i < quantity.length-1; i++) {
            let flagSwap = false;
            for (let j = 0; j < quantity.length - 1 - i; j++) {
                if (quantity[j] > quantity[j + 1]) {
                    [quantity[j], quantity[j + 1]] = [quantity[j + 1], quantity[j]];
                    flagSwap = true;
                }
            }
            if (!flagSwap) break;
        }
        console.log(quantity);
    };
    
    addItem = () => {
        const { years} = this.state;
        years.push("new item");
        console.log(years);
    };


    removeItem = () => {
        const { years} = this.state;
        years.pop();
        console.log(years);
    };

    render() {
        const { years, quantity } = this.state;

        return (
            <div className="main__task-3">
                <h3>Task-3</h3>
                <table rules="3">
                    <thead>
                        <tr>
                            <th onClick={this.withSortFoo}>Year</th>
                            <th onClick={this.bubbleSort}>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{years[0]}</td>
                            <td>{quantity[0]}</td>
                        </tr>
                        <tr>
                            <td>{years[1]}</td>
                            <td>{quantity[1]}</td>
                        </tr>
                        <tr>
                            <td>{years[2]}</td>
                            <td>{quantity[2]}</td>
                        </tr>
                        <tr>
                            <td>{years[3]}</td>
                            <td>{quantity[3]}</td>
                        </tr>
                        <tr>
                            <td>{years[4]}</td>
                            <td>{quantity[4]}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.addItem}>ADD</button>
                <button onClick={this.removeItem}>REMOVE</button>
            </div>
        )
    }
}