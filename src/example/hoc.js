import React, { Component } from 'react';
import { render } from 'react-dom';

class TodoApplication extends Component {
    render() {
        const { todos } = this.props;

        return <div>
            <h1>Hi</h1>
            <input value={"WHAT"} onChangeCapture={e => console.log(e.target.value)} />
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <button onClick={this.props.addTodo} type="button">Add Task</button>
        </div>;
    }
}

let HocTodoApplication = (Component) => {
    class WrappedApplication extends Component {
        constructor(props) {
            super(props);
            this.state = { todos: [] };
            this.addTodo = () => this.setState({ todos: [...this.state.todos, "Another"]})
        }
        render() {
            return <Component { ...this.props} {...this.state} addTodo={this.addTodo} />;
        }
    }

    return WrappedApplication;
};

let AppliedTodoApplication = HocTodoApplication(TodoApplication);

render(<AppliedTodoApplication/>, document.getElementById('app'));
