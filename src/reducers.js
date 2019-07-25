import { combineReducers } from 'redux';
import list from './components/List/reducers';

const rootReducer = combineReducers({
  list
});

export default rootReducer;
