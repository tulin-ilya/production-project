/* eslint-disable i18next/no-literal-string */
import type { TStateSchema } from "@app/providers/store-provider";
import { Button } from "@shared/ui-kit/button";
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "./store/counter-slice";
import { getCounterValue } from "./store/selectors";

export const Counter = memo(() => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
});
