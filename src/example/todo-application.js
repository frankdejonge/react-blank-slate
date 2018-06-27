import React, { Component } from 'react';
import { render } from 'react-dom';

let Task = ({ task: { task, id, completed}, onMarkCompleted, onDelete }) => (<li key={id}>
    <h3><strong>{task}</strong>&nbsp;{ completed && <em>done</em> }</h3>
    <p>
        <button onClick={onDelete}>delete</button>
        <button onClick={onMarkCompleted}>mark completed</button>
    </p>
</li>);

class TaskList extends Component {
    deleteTask(id) {
        return () =>  this.props.deleteTask(id);
    }
    markCompleted(id) {
        return () =>  this.props.markCompleted(id);
    }
    render() {
        const { tasks } = this.props;

        if (tasks.length === 0) {
            return <p>No tasks, maybe create one?</p>;
        }

        return <ul>
            {tasks.map(task => <Task onMarkCompleted={this.markCompleted(task.id)} onDelete={this.deleteTask(task.id)} key={task.id} task={task} />)}
        </ul>;
    }
}

class TodoApplication extends Component {
    constructor(props) {
        super(props);

        this.maybeAddTask = this.maybeAddTask.bind(this);
        this.markCompleted = this.markCompleted.bind(this);
        this.deleteTask = this.deleteTask.bind(this);

        this.state = {
            tasks: [],
            counter: 0,
        }
    }
    maybeAddTask(e) {
        if (e.keyCode !== 13) {
            return;
        }

        const task = e.target.value.trim();
        e.target.value = '';

        if (task.length < 1) {
            return;
        }

        let { counter } = this.state;

        this.setState({
            tasks: [ ... this.state.tasks, {task, completed: false, id: ++counter }],
            counter
        });
    }
    deleteTask(id) {
        let { tasks } = this.state;
        tasks = tasks.filter(task => task.id !== id);

        this.setState({tasks});
    }
    markCompleted(id) {
        let tasks = this.state.tasks.map(task => task.id !== id ? task : {...task, completed: true})
        this.setState({tasks});
    }
    render() {
        const { tasks } = this.state;

        return <div>
            <h1>There are {tasks.length} task(s).</h1>
            <TaskList deleteTask={this.deleteTask} markCompleted={this.markCompleted} tasks={tasks} />
            <div>
                <input type="text" onKeyDown={this.maybeAddTask} />
            </div>
        </div>;
    }
}

render(<div>
    <TodoApplication />
</div>, document.getElementById('app'));