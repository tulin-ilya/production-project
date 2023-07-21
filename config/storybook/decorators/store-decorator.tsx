import "@app/app/styles/index.css";

import { StoreProvider, TStateSchema } from "@app/providers/store-provider";
import type { DeepPartial } from "@reduxjs/toolkit";
import { Story } from "@storybook/react";

export const StoreDecorator =
    (state: DeepPartial<TStateSchema>) => (StoryComponent: Story) =>
        (
            <StoreProvider initialState={state}>
                <StoryComponent />
            </StoreProvider>
        );
