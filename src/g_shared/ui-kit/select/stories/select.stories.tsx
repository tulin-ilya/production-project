import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select as SelectComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "ui-kit/Select",
    component: SelectComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof SelectComponent>;

const Template: ComponentStory<typeof SelectComponent> = (args) => (
    <SelectComponent {...args} />
);

export const Select = Template.bind({});
