import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Portal as PortalComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-kit/Portal",
    component: PortalComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof PortalComponent>;

const Template: ComponentStory<typeof PortalComponent> = (args) => (
    <PortalComponent {...args} />
);

export const Portal = Template.bind({});
