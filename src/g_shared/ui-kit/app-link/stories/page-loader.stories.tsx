import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppLink as AppLinkComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Ui-kit/AppLink",
    component: AppLinkComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof AppLinkComponent>;

const Template: ComponentStory<typeof AppLinkComponent> = (args) => (
    <AppLinkComponent {...args} />
);

export const AppLink = Template.bind({});
