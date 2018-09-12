import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import add from './add';

export default combineReducers({
  user,
  runtime,
  add,
});
