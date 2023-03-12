import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button as ButtonComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-kit/Button",
    component: ButtonComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
    // decorators: [ThemeDecorator("dark")],
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
    <ButtonComponent {...args} />
);

export const Button = Template.bind({});
