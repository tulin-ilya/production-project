import { render, screen } from "@testing-library/react";

import { Button } from "../index";

describe("Button", () => {
    test("Test render", () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText("TEST")).toBeInTheDocument();
    });

    test("Test clear theme", () => {
        render(<Button view="clear">TEST</Button>);
        expect(screen.getByText("TEST")).toHaveClass("clear");
    });
});
