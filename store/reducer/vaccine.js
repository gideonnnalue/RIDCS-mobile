import {SET_VACCINES} from '../actions/actionTypes';

const INITIAL_STATE = {
  vaccines: [],
  //   child: null,
  //   loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_VACCINES:
      return {
        ...state,
        vaccines: payload,
      };
    default:
      return state;
  }
};
