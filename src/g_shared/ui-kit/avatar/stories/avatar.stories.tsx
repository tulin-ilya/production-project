import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar as AvatarComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "ui-kit/Avatar",
    component: AvatarComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof AvatarComponent>;

const Template: ComponentStory<typeof AvatarComponent> = (args) => (
    <AvatarComponent {...args} />
);

export const Avatar = Template.bind({});
