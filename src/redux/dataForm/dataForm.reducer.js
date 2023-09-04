import { dataTourActionTypes } from "./dataForm";

const INITIAL_STATE = { data: {} };

const dataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case dataTourActionTypes.UPDATE_SHOW_DATA:
      return { data: { ...state, ...action.payload } };
    case dataTourActionTypes.CLEAR_SHOW_DATA:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default dataReducer;
