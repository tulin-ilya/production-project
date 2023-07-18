import { useDispatch, useSelector } from "react-redux";

import { counterActions } from "../store/counter-slice";
import { getCounterValue } from "../store/selectors";

export const useCounter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return { counterValue, increment, decrement };
};
