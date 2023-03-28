/* eslint-disable i18next/no-literal-string */
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal as ModalComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/Modal",
    component: ModalComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => (
    <>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
        molestiae sapiente et sed, asperiores similique ipsum consectetur,
        recusandae temporibus nemo qui eveniet nostrum reiciendis harum earum
        voluptatem rem laboriosam eos.
        <ModalComponent {...args}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            ratione nisi praesentium architecto suscipit at excepturi ipsa qui
            provident delectus, aut sunt deserunt assumenda voluptatum veniam
            facere? Maxime, ab praesentium.
        </ModalComponent>
    </>
);

export const Modal = Template.bind({});
