import user from './user';
import recipes from './recipes';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  recipes
});