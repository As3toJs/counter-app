import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
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

    /*renderTags() {
        if (this.state.count === 0) return <p>There is no tags</p>
        return (this.state.tags.map(tag => {
            return (<li key={tag}>{tag}</li>)
        }
        ))
    }*/

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }
    handleDecrement = () => {
        if (this.state.count > 0)
            this.setState({ count: this.state.count - 1 });
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