import { renderWithTranslation } from "@shared/lib/tests/render-with-translations";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Sidebar } from "../index";

describe("Sidebar", () => {
    it("Test render", () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    it("toggle test", async () => {
        renderWithTranslation(<Sidebar />);
        const toggler = screen.getByTestId("sidebar-toggler");

        await userEvent.click(toggler);

        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
    });
});
