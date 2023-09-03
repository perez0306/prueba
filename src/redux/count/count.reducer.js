import { countTourActionTypes } from "./count";

const INITIAL_STATE = {
  count: 0,
};

const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case countTourActionTypes.UPDATE_SHOW_COUNT:
      return { ...state, count: action.payload };
    case countTourActionTypes.CLEAR_ACTIVITIES_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default countReducer;
