import { FETCH_CAMPERS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPERS:
      return action.payload.data;
    default:
      return state;
  }
};
