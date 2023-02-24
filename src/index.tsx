import "@shared/configs/i18n";

import { App } from "@app/index";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
