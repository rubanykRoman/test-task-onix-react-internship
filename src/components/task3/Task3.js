import React, { Component } from 'react';
import Task3Table from './Task3Tables';
import './Task3.scss';

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
            <div className="task-3">
                <h3>Task-3</h3>
                <Task3Table
                    withSortFoo={this.withSortFoo}
                    bubbleSort={this.bubbleSort}
                    years={years}
                    quantity={quantity}>
                </Task3Table>
                <button onClick={this.addItem}>ADD</button>
                <button onClick={this.removeItem}>REMOVE</button>
            </div>
        )
    }
}