import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import TaskList from './todos/task-list';
import * as reducers from './todos/reducers';
import * as actions from './todos/actions';

let store = createStore(
    combineReducers(reducers),
    applyMiddleware(thunk)
);

class TodoDisplay extends Component {
    constructor(props) {
        super(props);
        this.maybeAddTask = this.maybeAddTask.bind(this);
    }
    maybeAddTask(e) {
        if (e.keyCode !== 13) {
            return;
        }

        const task = e.target.value.trim();

        if (task.length < 1) {
            return;
        }

        e.target.value = '';

        this.props.addTodo(task);
    }
    render() {
        const { todos } = this.props;

        return <div>
            <h1>There are {todos.length} task(s).</h1>
            <TaskList
                deleteTask={this.props.deleteTodo}
                markCompleted={this.props.markTodoCompleted}
                tasks={todos} />
            <div>
                <input type="text" onKeyDown={this.maybeAddTask} />
            </div>
        </div>;
    }
}

let ReduxConnector = connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
);

let ReduxApplication = ReduxConnector(TodoDisplay);

render(<Provider store={store}>
    <ReduxApplication />
</Provider>, document.getElementById('app'));