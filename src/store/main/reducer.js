import * as types from './actionTypes';
import { updateObject } from '../utility';

const initialState = {
  todoName: ''
}

export default function(state = initialState, action) {
  switch(action.type) {
    case types.SAVE_TODO_NAME:
      return updateObject(state, { todoName: action.todoName });
    default:
      return state;
  }
}
