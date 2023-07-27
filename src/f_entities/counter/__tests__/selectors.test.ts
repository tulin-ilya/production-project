import type { TStateSchema } from "@app/providers/store-provider";

import { counterActions, counterReducer } from "../src/store/counter-slice";
import type { TCounterState } from "../src/store/models";
import { getCounterState, getCounterValue } from "../src/store/selectors";

describe("getCounterState", () => {
    it("должен вовзращать value", () => {
        const state: Partial<TStateSchema> = { counter: { value: 10 } };

        expect(getCounterState(state as TStateSchema)).toEqual({ value: 10 });
    });
});

describe("getCounterValue", () => {
    it("должен вовзращать value", () => {
        const state: Partial<TStateSchema> = { counter: { value: 10 } };

        expect(getCounterValue(state as TStateSchema)).toEqual(10);
    });
});

describe("counterSlice", () => {
    it("decrement", () => {
        const state: TCounterState = { value: 10 };

        expect(counterReducer(state, counterActions.decrement)).toEqual({
            value: 9,
        });
    });

    it("increment", () => {
        const state: TCounterState = { value: 10 };

        expect(counterReducer(state, counterActions.increment)).toEqual({
            value: 11,
        });
    });

    it("empty state ", () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({
            value: 1,
        });
    });
});
