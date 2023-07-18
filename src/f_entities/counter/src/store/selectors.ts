import { TStateSchema } from "@app/providers/store-provider";
import { createSelector } from "@reduxjs/toolkit";

export const getCounterState = (state: TStateSchema) => state.counter;

export const getCounterValue = createSelector(
    getCounterState,
    (counter) => counter.value
);
