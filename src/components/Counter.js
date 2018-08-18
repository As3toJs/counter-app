import React, { Component } from 'react';

class Counter extends Component {
    state = {
        itemId: this.props.item.itemId,
        count: this.props.item.count
    }

    render() {
        return (
            <div style={{ padding: '0.5em' }}>
                <span style={{ width: 50 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm m-2">+</button>
                <button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
            </div >
        );
    }

    handleIncrement = () => {
        const count = this.state.count + 1;
        this.setState({ count });
        this.props.counter({ itemId: this.state.itemId, count });
    }

    handleDecrement = () => {
        if (this.state.count > 0) {
            const count = this.state.count - 1;
            this.setState({ count });
            this.props.counter({ itemId: this.state.itemId, count });
        }
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;