import { FETCH_CAMPER_DETAILS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPER_DETAILS:
      return action.payload.data;
    default:
      return state;
  }
};
