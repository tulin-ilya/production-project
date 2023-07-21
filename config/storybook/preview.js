import { addDecorator } from "@storybook/react";

import { RouterDecorator } from "./decorators/router-decorator";
import { StyleDecorator } from "./decorators/style-decorator";

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(RouterDecorator);
addDecorator(StyleDecorator);
