import * as types from '../constants/ActionTypes';

const initialState = {
  items: []
};

export default function items(state = initialState, action) {
  switch (action.type) {
    case types.ADD_ITEM:
      let newItem = {
        name: action.values.name,
        link: action.values.link,
        notes: action.values.notes
      };
      return {
        ...state,
        items: [...state.items, newItem]
    }
    case types.TOGGLE_ADDING_ITEM:
      return {
      ...state,
      addingItem: !state.addingItem
    }

    default:
      return state;
  }
}
