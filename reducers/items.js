import * as types from '../constants/ActionTypes';

const initialState = {
  items: []
}

export default function items(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      let newItem = {
        name: action.name,
        link: action.link,
        notes: action.notes
      };
      return {
        ...state,
        items: [...state.items, newItem]
    }
    default:
      return state;
  }
}
