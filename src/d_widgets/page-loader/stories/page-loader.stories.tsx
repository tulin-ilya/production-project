import { ComponentMeta, ComponentStory } from "@storybook/react";

import { PageLoader as PageLoaderComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/PageLoader",
    component: PageLoaderComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof PageLoaderComponent>;

const Template: ComponentStory<typeof PageLoaderComponent> = (args) => (
    <PageLoaderComponent {...args} />
);

export const PageLoader = Template.bind({});
