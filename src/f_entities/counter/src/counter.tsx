import { Button } from "@shared/ui-kit/button";
import { memo } from "react";
import { useTranslation } from "react-i18next";

import { useCounter } from "./hooks/use-counter";

export const Counter = memo(() => {
    const { counterValue, increment, decrement } = useCounter();

    const { t } = useTranslation("counter");

    return (
        <div>
            <h1 data-testid={"counterValue"}>{counterValue}</h1>
            <Button data-testid={"increment"} onClick={increment}>
                {t("increment")}
            </Button>
            <Button data-testid={"decrement"} onClick={decrement}>
                {t("decrement")}
            </Button>
        </div>
    );
});
