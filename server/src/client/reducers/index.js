import { combineReducers } from 'redux';
import campersReducer from './campersReducer';

export default combineReducers({
  campers: campersReducer,
});
