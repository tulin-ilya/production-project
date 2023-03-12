import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ErrorFallback as ErrorFallbackComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/ErrorFallback",
    component: ErrorFallbackComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof ErrorFallbackComponent>;

const Template: ComponentStory<typeof ErrorFallbackComponent> = (args) => (
    <ErrorFallbackComponent {...args} />
);

export const ErrorFallback = Template.bind({});
