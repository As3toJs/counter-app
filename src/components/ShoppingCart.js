import React, { Component } from 'react';
import Counter from './Counter';

export default class ShoppingCart extends Component {
    state = {
        totalCount: 0,
        items: [{ itemId: 1, count: 1 }, { itemId: 2, count: 0 }, { itemId: 3, count: 4 }, { itemId: 4, count: 0 }]
    }
    render() {
        return (
            <div style={{ padding: '0.5em' }}>
                <div>Total Items : {this.getTotalCount()}</div>
                <button
                    onClick={this.handleReset}
                    className="btn btn-primary btn-sm m-3">
                    Reset
                </button>
                {this.state.items.map(item => {
                    return (
                        <Counter
                            key={item.itemId}
                            item={item}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />)
                })
                }
            </div>
        )
    }

    handleIncrement = (item) => {
        const items = this.state.items;
        const index = items.indexOf(item);
        items[index].count++;
        this.setState({ items });
    }

    handleDecrement = (item) => {
        const items = this.state.items;
        const index = items.indexOf(item);
        if (items[index].count > 0) {
            items[index].count--;
            this.setState({ items });
        }
    }

    handleDelete = (item) => {
        let items = this.state.items;
        items = items.filter(i => i.itemId !== item.itemId)
        this.setState({ items })
    }

    handleReset = () => {
        let items = [...this.state.items];
        items = items.map(i => {
            i.count = 0;
            return i;
        })
        this.setState({ items });
    }
    getTotalCount = () => {
        const items = [...this.state.items];
        const counts = items.map(item => item.count);
        return counts.reduce((a, b) => a + b);
    }
} 