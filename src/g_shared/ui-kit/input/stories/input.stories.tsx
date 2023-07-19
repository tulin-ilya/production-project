import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Input as InputComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-Kit/Input",
    component: InputComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof InputComponent>;

const Template: ComponentStory<typeof InputComponent> = (args) => (
    <InputComponent {...args} />
);

export const Input = Template.bind({});
