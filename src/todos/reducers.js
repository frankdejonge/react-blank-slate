import * as actions from './actions';

export function todos(state = [], action) {
    switch (action.type) {
        case actions.ADDING_TODO:
            return [...state, { ...action.todo, saving: true }];
        case actions.ADDED_TODO:
            return state.map(todo => todo.id === action.todo.id ? {...todo, saving: false} : todo);
        case actions.TODO_UPDATED:
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo);
        case actions.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}

export function isSaving(state = false, action) {
    switch (action.type) {
        case actions.ADDING_TODO:
            return true;
        case actions.ADDED_TODO:
            return false;
        default:
            return state;
    }
}