import { actions } from '../constants';

export default function ui(state = {}, action) {
  switch (action.type) {
    case actions.UPDATE_UI:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
