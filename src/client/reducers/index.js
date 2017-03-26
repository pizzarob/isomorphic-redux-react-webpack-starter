import todos from './todo.js';
import ui from './ui';
import { combineReducers } from 'redux';

export default combineReducers({
  todos,
  ui,
});
