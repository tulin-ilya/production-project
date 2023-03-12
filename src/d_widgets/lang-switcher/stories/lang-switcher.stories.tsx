import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LangSwitcher as LangSwitcherComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/LangSwitcher",
    component: LangSwitcherComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof LangSwitcherComponent>;

const Template: ComponentStory<typeof LangSwitcherComponent> = () => (
    <LangSwitcherComponent />
);

export const LangSwitcher = Template.bind({});
