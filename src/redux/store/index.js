import { createStore } from "redux";
import { rootReducer } from "./root-reducer";

// Local reducers
import countReducer from '../count/count.reducer';


const store = createStore(
  countReducer,
);

export default store;
