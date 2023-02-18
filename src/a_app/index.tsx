import { ThemeProvider } from "@shared/providers/theme-provider";

import AppComponent from "./app";

export const App = () => (
    <ThemeProvider>
        <AppComponent />
    </ThemeProvider>
);
