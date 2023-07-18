import { render, screen } from "@testing-library/react";

import { Button } from "../index";

describe("Button", () => {
    it("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    it("Test clear theme", () => {
        render(<Button view="clear">TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
