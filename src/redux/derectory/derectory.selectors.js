import { createSelector } from "reselect";

const selectDerectory = (state) => state.derectory;

export const selectDerectorySections = createSelector(
  [selectDerectory],
  (derectory) => derectory.sections
);
