import React, { Component } from 'react';
import Counter from './Counter';

export default class ShoppingCart extends Component {
    state = {
        totalCount: 0,
        items: [{ itemId: 1, count: 1 }, { itemId: 2, count: 0 }, { itemId: 3, count: 4 }]
    }
    render() {
        return (
            <div style={{ padding: '0.5em' }}>
                <span>Total Items : {this.getTotalCount()}</span>
                {this.state.items.map(item => {
                    return <Counter key={item.itemId} item={item} counter={this.countTotalItems} />
                })
                }
            </div>
        )
    }

    getTotalCount = () => {
        const items = this.state.items.filter((item) => {
            return item.count;
        })
        return items.map(item => item.count).reduce((a, b) => a + b);
    }

    countTotalItems = (count) => {
        const updatedItems = this.state.items.map(item => {
            if (item.itemId === count.itemId) {
                item.count = count.count;
            }
            return item;
        })

        this.setState({ items: updatedItems });
    }
} 