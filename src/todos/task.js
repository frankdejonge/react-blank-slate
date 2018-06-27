import React  from 'react';

let Task = ({ task: { task, id, completed}, onMarkCompleted, onDelete }) => (<li key={id}>
    <h3><strong>{task}</strong>&nbsp;{ completed && <em>done</em> }</h3>
    <p>
        <button onClick={onDelete}>delete</button>
        <button onClick={onMarkCompleted}>mark completed</button>
    </p>
</li>);

export default Task;