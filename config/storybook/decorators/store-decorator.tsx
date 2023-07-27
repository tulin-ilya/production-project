import "@app/app/styles/index.css";

import { StoreProvider, TStateSchema } from "@app/providers/store-provider";
import { TReducersList } from "@shared/ui-kit/dynamic-module-loader";
import { Story } from "@storybook/react";

export const StoreDecorator = (
    state: Partial<TStateSchema>,
    asyncReducers?: TReducersList
) => {
    return (StoryComponent: Story) => (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <StoryComponent />
        </StoreProvider>
    );
};
