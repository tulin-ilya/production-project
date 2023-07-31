import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProfileCard as ProfileCardComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "widgets/ProfileCard",
    component: ProfileCardComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof ProfileCardComponent>;

const Template: ComponentStory<typeof ProfileCardComponent> = (args) => (
    <ProfileCardComponent {...args} />
);

export const ProfileCard = Template.bind({});
