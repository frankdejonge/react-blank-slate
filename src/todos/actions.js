import uuid from '../uuid';

export const ADD_TODO = 'ADD_TODO';

export function addTodo(task) {
    const todo = {task, id: uuid(), completed: false};

    return {type: ADD_TODO, todo};
}

export const MARK_COMPLETED = 'MARK_COMPLETED';

export function markTodoCompleted(id) {
    return {type: MARK_COMPLETED, id};
}

export const DELETE_TODO = 'DELETE_TODO';

export function deleteTodo(id) {
    return {type: DELETE_TODO, id};
}