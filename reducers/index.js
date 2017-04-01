import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import items from '../reducers/items';

const rootReducer = combineReducers({
  form: formReducer,
  items: items
});

export default rootReducer;
