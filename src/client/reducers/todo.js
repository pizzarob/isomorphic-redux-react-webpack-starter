import { actions } from '../constants';
import { combineReducers } from 'redux';

export default function todos(state = [], action) {
    switch (action.type) {
        case actions.ADD_TODO:
            return [
                ...state, action.payload
            ]
        case actions.TOGGLE_TODO:
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return Object.assign({}, todo, { completed: !todo.completed });
                }
                return todo;
            });
        case actions.REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}