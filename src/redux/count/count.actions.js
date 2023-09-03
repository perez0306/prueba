import { countTourActionTypes } from './count';

export const updateCountTour = (payload) => ({
  type: countTourActionTypes.UPDATE_SHOW_COUNT,
  payload,
});

export const clearCountTour = () => ({
  type: countTourActionTypes.CLEAR_SHOW_COUNT,
});
