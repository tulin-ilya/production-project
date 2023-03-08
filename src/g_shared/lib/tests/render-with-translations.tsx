import i18n from "@shared/configs/i18n/i18n-for-tests";
import { render } from "@testing-library/react";
import type { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

export function renderWithTranslation(component: ReactNode) {
    return render(<I18nextProvider i18n={i18n}>{component}</I18nextProvider>);
}
