import * as actions from './actions';

export function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [...state, action.todo ];
        case actions.MARK_COMPLETED:
            return state.map(todo => todo.id === action.id ? {...todo, completed: true} : todo);
        case actions.DELETE_TODO:
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
}