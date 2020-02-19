import {ADD_CHILD} from './actionTypes';
// import {insertHealthFacility} from '../../helper/db';

export const addChild = data => async dispatch => {
  dispatch({type: ADD_CHILD, payload: data});
};
