import React from 'react';

const Counter = ({ item, onIncrement, onDecrement, onDelete }) => {

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-";
        return classes += item.count === 0 ? 'warning' : 'primary';
    }

    const formatCount = () => {
        return item.count === 0 ? "Zero" : item.count;
    }

    return (
        <div style={{ padding: '0.5em' }}>
            <span
                style={{ width: 50 }} className={getBadgeClasses()}>{formatCount()}</span>
            <button
                onClick={() => onIncrement(item)}
                className="btn btn-secondary btn-sm m-2">
                +
                </button>
            <button disabled={item.count <= 0}
                onClick={() => onDecrement(item)}
                className="btn btn-secondary btn-sm m-2">
                -
                </button>
            <button
                onClick={() => onDelete(item)}
                className="btn btn-danger btn-sm">
                Delete
                </button>
        </div >
    );
}

export default Counter;