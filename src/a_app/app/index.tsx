import { ErrorBoundary } from "@app/providers/error-boundary";
import { StoreProvider } from "@app/providers/store-provider";
import { ThemeProvider } from "@app/providers/theme-provider";
import { BrowserRouter } from "react-router-dom";

import AppComponent from "./app";

export const App = () => (
    <StoreProvider>
        <ErrorBoundary>
            <BrowserRouter>
                <ThemeProvider>
                    <AppComponent />
                </ThemeProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>
);
