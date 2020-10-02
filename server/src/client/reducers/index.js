import { combineReducers } from 'redux';
import campersReducer from './campersReducer';
import camperDetailsReducer from './camperDetailsReducer';

export default combineReducers({
  campers: campersReducer,
  camperData: camperDetailsReducer,
});
