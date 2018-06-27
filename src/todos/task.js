import React, { Component } from 'react';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        };
        this.startEditing = () => this.setState({editing: true});
        this.stopEditing = () => this.setState({editing: false});
        this.maybeUpdateTask = e => {
            if (e.keyCode !== 13) return;
            let task = e.target.value.trim();
            this.props.updateTaskDescription(task);
            this.setState({editing: false});
        }
    }
    render() {
        const { task: { task, completed, saving }, onMarkCompleted, onMarkNotCompleted, onDelete } = this.props;

        if (this.state.editing) {
            return <div>
                <input autoFocus={true} type="text" defaultValue={task} onKeyDown={this.maybeUpdateTask}/>
                <button onClick={this.stopEditing}>cancel</button>
            </div>;
        }

        return <li>
            <h3><strong>{task}</strong>&nbsp;{completed && <em>done</em>} {saving && <em>saving</em>}</h3>
            <p>
                <button onClick={onDelete}>delete</button>
                <button onClick={this.startEditing}>edit</button>
                <button onClick={completed ? onMarkNotCompleted : onMarkCompleted}>toggle completed</button>
            </p>
        </li>;
    }
}

export default Task;