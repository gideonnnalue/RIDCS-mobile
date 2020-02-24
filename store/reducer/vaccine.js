import {ADD_CHILD, SET_CHILD_RECORDS} from '../actions/actionTypes';

const INITIAL_STATE = {
  vaccines: [],
  //   child: null,
  //   loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case SET_CHILD_RECORDS:
      return {
        ...state,
        children: payload,
      };
    case ADD_CHILD:
      return {
        ...state,
        children: [...state.children, payload],
      };
    default:
      return state;
  }
};
