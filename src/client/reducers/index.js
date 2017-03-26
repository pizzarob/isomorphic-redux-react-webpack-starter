import todos from './todo.js';
import ui from './ui';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  todos,
  ui,
  router: routerReducer,
});
