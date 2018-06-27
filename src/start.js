import React, { Component } from 'react';
import { render } from 'react-dom';
import { bindActionCreators, createStore, compose, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { connect, Provider } from 'react-redux';
import TaskList from './todos/task-list';
import * as reducers from './todos/reducers';
import * as actions from './todos/actions';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    combineReducers(reducers),
    {todos: window.INITIAL_STATE},
    composeEnhancers(applyMiddleware(thunk))
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
        const { todos, deleteTodo, markTodoCompleted, updateTaskDescription, markTodoNotCompleted, isSaving } = this.props;

        return <div>
            <h1>There are {todos.length} task(s). { isSaving && <span>SAVING!!!</span> }</h1>
            <TaskList
                deleteTask={deleteTodo}
                markCompleted={markTodoCompleted}
                markNotCompleted={markTodoNotCompleted}
                updateTaskDescription={updateTaskDescription}
                tasks={todos} />
            <div>
                <input autoFocus={true} type="text" onKeyDown={this.maybeAddTask} />
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