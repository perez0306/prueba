import { createStore } from "redux";
// Local reducers
import { rootReducer } from "./root-reducer";

const store = createStore(rootReducer);

export default store;
