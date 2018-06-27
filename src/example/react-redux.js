import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { bindActionCreators, createStore, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

import * as actions from './react-redux/actions';
import * as reducers from './react-redux/reducers';

const store = createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class TaskApplication extends Component {
    render() {
        const { tasks } = this.props;

        return <div>
            <ul>
                {tasks.map(({ id, task }) => <li key={id}>{task}</li>)}
            </ul>
            <button onClick={() => this.props.createTask(`Task ${tasks.length}`)}>Add task</button>
        </div>;
    }
}

TaskApplication.propTypes = {
    createTask: PropTypes.func,
};

let ReduxTaskApplication = connect(
    state => state,
    dispatch => bindActionCreators(actions, dispatch)
)(TaskApplication);

render(<Provider store={store}>
    <ReduxTaskApplication/>
</Provider>, document.getElementById('app'));

