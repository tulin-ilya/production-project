import "@app/app/styles/index.css";

import { StoreProvider, TStateSchema } from "@app/providers/store-provider";
import type { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

export const StoreDecorator = (
    state: DeepPartial<TStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<TStateSchema>>
) => {
    return (StoryComponent: Story) => (
        <StoreProvider initialState={state} asyncReducers={asyncReducers}>
            <StoryComponent />
        </StoreProvider>
    );
};
