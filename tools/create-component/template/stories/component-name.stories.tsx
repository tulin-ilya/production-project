import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ComponentName as ComponentNameComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "ComponentName",
    component: ComponentNameComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof ComponentNameComponent>;

const Template: ComponentStory<typeof ComponentNameComponent> = (args) => (
    <ComponentNameComponent {...args} />
);

export const ComponentName = Template.bind({});
