import i18n from "@config/i18n/i18n-for-tests";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

export type TComponentRenderOptions = {
    route?: string;
};

export function componentRender(
    component: ReactNode,
    options: TComponentRenderOptions = {}
) {
    const { route = "/" } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
        </MemoryRouter>
    );
}
