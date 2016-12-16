import { createStore } from 'redux';
import reducers from './reducers';

export default function makeStore(initialState) {
    return createStore(reducers, initialState);
}