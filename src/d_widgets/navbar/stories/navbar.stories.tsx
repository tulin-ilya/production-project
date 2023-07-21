import { ThemeProvider } from "@app/providers/theme-provider";
import { StoreDecorator } from "@config/storybook/decorators/store-decorator";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Navbar as NavbarComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/Navbar",
    component: NavbarComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
    decorators: [StoreDecorator({ login: {} })],
} as ComponentMeta<typeof NavbarComponent>;

const Template: ComponentStory<typeof NavbarComponent> = (args) => (
    <ThemeProvider>
        <NavbarComponent {...args} />
    </ThemeProvider>
);

export const Navbar = Template.bind({});
