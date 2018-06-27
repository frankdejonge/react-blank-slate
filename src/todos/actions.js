import uuid from '../uuid';
import fetch from 'unfetch';

const APPLICATION_ID = 'bf87f80a-296b-4286-937e-37eac0493234';

export const ADDING_TODO = 'ADDING_TODO';
export const ADDED_TODO = 'ADDED_TODO';

export function addTodo(task) {
    const todo = {task, id: uuid(), completed: false};

    return dispatch => {
        dispatch({type: ADDING_TODO, todo});
        return fetch('http://todos.frankdejonge.nl:8000/todo', {
            method: 'POST',
            headers: {
                'x-application-id': APPLICATION_ID
            },
            body: JSON.stringify(todo)
        })
            .then(resp => resp.json())
            .then(todo => dispatch({type: ADDED_TODO, todo}));
    };
}

export const TODO_UPDATED = 'TODO_UPDATED';

function updateTodo(id, update) {
    return dispatch => {
        return fetch(`http://todos.frankdejonge.nl:8000/todo/${id}`, {
            method: 'PUT',
            headers: {
                'x-application-id': APPLICATION_ID
            },
            body: JSON.stringify(update)
        })
            .then(resp => resp.json())
            .then(todo => dispatch({ type: TODO_UPDATED, todo }));
    }
}

export function markTodoCompleted(id) {
    return updateTodo(id, {completed: true});
}

export function markTodoNotCompleted(id) {
    return updateTodo(id, {completed: false});
}

export function updateTaskDescription(id, task) {
    return updateTodo(id, {task});
}

export const DELETE_TODO = 'DELETE_TODO';

export function deleteTodo(id) {
    return dispatch => {
        return fetch(`http://todos.frankdejonge.nl:8000/todo/${id}`, {
            method: 'DELETE',
            headers: {
                'x-application-id': APPLICATION_ID
            }
        })
            .then(() => dispatch({ type: DELETE_TODO, id }));
    };
}