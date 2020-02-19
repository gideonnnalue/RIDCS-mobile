import {ADD_CHILD} from '../actions/actionTypes';

const INITIAL_STATE = {
  children: [],
  child: null,
  loading: false,
};

export default (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case ADD_CHILD:
      return {
        ...state,
        children: [...state.children, payload],
      };
    default:
      return state;
  }
};
