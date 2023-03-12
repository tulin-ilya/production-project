import { ThemeProvider } from "@app/providers/theme-provider";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ThemeSwitcher as ThemeSwitcherComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/ThemeSwitcher",
    component: ThemeSwitcherComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
    // decorators: [ThemeDecorator("dark")],
} as ComponentMeta<typeof ThemeSwitcherComponent>;

const Template: ComponentStory<typeof ThemeSwitcherComponent> = (args) => (
    <ThemeProvider>
        <ThemeSwitcherComponent {...args} />
    </ThemeProvider>
);

export const ThemeSwitcher = Template.bind({});
