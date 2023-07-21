import i18n from "@config/i18n/i18n-for-tests";
import { Story } from "@storybook/react";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

export const TranslationDecorator = (StoryComponent: Story) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            <StoryComponent />
        </Suspense>
    </I18nextProvider>
);