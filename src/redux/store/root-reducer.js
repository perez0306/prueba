import { combineReducers } from 'redux';

// Local reducers
import countReducer from '../count/count.reducer';

/* export const rootReducer = combineReducers({
  countReducer,
}); */

export const rootReducer = countReducer;