import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Counter as CounterComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-kit/Button",
    component: CounterComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof CounterComponent>;

const Template: ComponentStory<typeof CounterComponent> = (args) => (
    <CounterComponent />
);

export const Counter = Template.bind({});
