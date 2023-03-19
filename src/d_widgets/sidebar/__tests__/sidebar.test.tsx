import { componentRender } from "@config/jest/component-render";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Sidebar } from "../index";

describe("Sidebar", () => {
    it("Test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    it("toggle test", async () => {
        componentRender(<Sidebar />);
        const toggler = screen.getByTestId("sidebar-toggler");

        await userEvent.click(toggler);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
