import * as types from './actionTypes';

export const saveTodoName = (todoName) => {
  return {
    type: types.SAVE_TODO_NAME,
    todoName
  }
}
