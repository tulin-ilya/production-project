import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { App } from "@app/index";

import "@shared/configs/i18n";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
