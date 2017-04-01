import * as types from '../constants/ActionTypes';

export function addItem(values) {
  return {
    type: type.ADD_ITEM,
    values: values
  };
}

export function toggleAddingItem() {
  return {
    type: types.TOGGLE_ADDING_ITEM
  }
}
