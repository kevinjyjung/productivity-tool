import React from 'react';

function checkToday(timestamp) {
    const d1 = new Date();
    const d2 = new Date(timestamp);
    return (d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate());
}

export default function Task({ task, onComplete }) {
    return (
        <button 
            className="task-button" 
            disabled={checkToday(task.timestamp)} 
            onClick={onComplete} >
            {task.number} {task.unit} of {task.name}
        </button>
    );
}
