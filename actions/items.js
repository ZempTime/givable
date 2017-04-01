import * as types from '../constants/ActionTypes';

export function addItem(name, link, notes) {
  return {
    type: type.ADD_ITEM,
    name: name,
    link: link,
    notes: notes
  };
}
