import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text as TextComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-Kit/Text",
    component: TextComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof TextComponent>;

const Template: ComponentStory<typeof TextComponent> = (args) => (
    <TextComponent {...args}>text</TextComponent>
);

export const Text = Template.bind({});
