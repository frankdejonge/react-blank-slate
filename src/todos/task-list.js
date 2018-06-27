import React, { Component } from 'react';
import Task from './task';

export default class TaskList extends Component {
    deleteTask(id) {
        return () =>  this.props.deleteTask(id);
    }
    markCompleted(id) {
        return () =>  this.props.markCompleted(id);
    }
    markNotCompleted(id) {
        return () =>  this.props.markNotCompleted(id);
    }
    updateTaskDescription(id) {
        return (task) =>  this.props.updateTaskDescription(id, task);
    }
    render() {
        const { tasks } = this.props;

        if (tasks.length === 0) {
            return <p>No tasks, maybe create one?</p>;
        }

        return <ul>
            {tasks.map(task => <Task
                onMarkCompleted={this.markCompleted(task.id)}
                onMarkNotCompleted={this.markNotCompleted(task.id)}
                updateTaskDescription={this.updateTaskDescription(task.id)}
                onDelete={this.deleteTask(task.id)}
                key={task.id}
                task={task} />)}
        </ul>;
    }
}