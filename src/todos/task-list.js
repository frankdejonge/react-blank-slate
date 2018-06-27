import React, { Component } from 'react';
import Task from './task';

export default class TaskList extends Component {
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