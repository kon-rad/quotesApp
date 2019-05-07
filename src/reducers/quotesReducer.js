import { FETCH_QUOTE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUOTE:
      console.log('action', action);
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
