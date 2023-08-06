import { StoreDecorator } from "@config/storybook/decorators/store-decorator";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ProfileCardHeader as ProfileCardHeaderComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "widgets/ProfileCardHeader",
    component: ProfileCardHeaderComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
    decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfileCardHeaderComponent>;

const Template: ComponentStory<typeof ProfileCardHeaderComponent> = (args) => (
    <ProfileCardHeaderComponent {...args} />
);

export const ProfileCardHeader = Template.bind({});
