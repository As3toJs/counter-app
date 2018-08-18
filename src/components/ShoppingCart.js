import React, { Component } from 'react';
import Counter from './Counter';

export default class ShoppingCart extends Component {
    render() {
        const items = 4;
        return (
            <div>
                <Counter />
                <Counter />
            </div>

        )
    }

} 