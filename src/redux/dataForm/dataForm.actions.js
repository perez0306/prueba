import { dataTourActionTypes } from './dataForm';

export const updateDataTour = (payload) => ({
  type: dataTourActionTypes.UPDATE_SHOW_DATA,
  payload,
});

export const clearDataTour = () => ({
  type: dataTourActionTypes.CLEAR_SHOW_DATA,
});
