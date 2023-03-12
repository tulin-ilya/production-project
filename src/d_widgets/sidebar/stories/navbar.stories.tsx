import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Sidebar as SidebarComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/Sidebar",
    component: SidebarComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof SidebarComponent>;

const Template: ComponentStory<typeof SidebarComponent> = (args) => (
    <SidebarComponent {...args} />
);

export const Sidebar = Template.bind({});
