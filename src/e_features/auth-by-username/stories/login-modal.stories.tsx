import { StoreDecorator } from "@config/storybook/decorators/store-decorator";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginModal as LoginModalComponent } from "../index";
import { ARGS, ARGS_TYPES, asyncReducers, store } from "./config";

export default {
    title: "features/LoginModal",
    component: LoginModalComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
    decorators: [StoreDecorator(store, asyncReducers)],
} as ComponentMeta<typeof LoginModalComponent>;

const Template: ComponentStory<typeof LoginModalComponent> = (args) => (
    <LoginModalComponent {...args} />
);

export const LoginModal = Template.bind({});
