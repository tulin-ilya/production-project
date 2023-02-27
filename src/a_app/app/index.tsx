import { ErrorBoundary } from "@app/providers/error-boundary";
import { ThemeProvider } from "@app/providers/theme-provider";
import { BrowserRouter } from "react-router-dom";

import AppComponent from "./app";

export const App = () => (
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <AppComponent />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>
);
