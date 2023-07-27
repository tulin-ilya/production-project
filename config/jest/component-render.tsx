import type { TStateSchema } from "@app/providers/store-provider";
import { StoreProvider } from "@app/providers/store-provider";
import i18n from "@config/i18n/i18n-for-tests";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { MemoryRouter } from "react-router-dom";

export type TComponentRenderOptions = {
    route?: string;
    initialState?: Partial<TStateSchema>;
};

export function componentRender(
    component: ReactNode,
    options: TComponentRenderOptions = {}
) {
    const { route = "/", initialState } = options;

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider initialState={initialState}>
                <I18nextProvider i18n={i18n}>{component}</I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}
