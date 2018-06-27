import * as actions from './actions';

export function tasks(state = [], action) {
    switch (action.type) {
        case actions.CREATE_TASK:
            return [...state, { task: action.task }];
        default:
            return state;
    }
}