import { componentRender } from "@config/jest/component-render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Counter } from "../index";

describe("Counter", () => {
    it("счетчик должен рендериться и нормально работать", async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });

        const valueElement = screen.getByTestId("counterValue");
        expect(valueElement).toHaveTextContent("10");

        await userEvent.click(screen.getByTestId("increment"));
        expect(valueElement).toHaveTextContent("11");

        await userEvent.click(screen.getByTestId("decrement"));
        expect(valueElement).toHaveTextContent("10");
    });
});
