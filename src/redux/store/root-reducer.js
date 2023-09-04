import { combineReducers } from 'redux';

// Local reducers
import countReducer from '../count/count.reducer';
import dataReducer from '../dataForm/dataForm.reducer';

export const rootReducer = combineReducers({
  countReducer,
  dataReducer
});
