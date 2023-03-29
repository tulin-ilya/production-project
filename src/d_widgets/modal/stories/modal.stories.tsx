/* eslint-disable i18next/no-literal-string */
import { Button } from "@shared/ui-kit/button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";

import { Modal as ModalComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "Widgets/Modal",
    component: ModalComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Button onClick={() => setIsOpen(true)}>open modal</Button>
            <ModalComponent
                {...args}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
                ratione nisi praesentium architecto suscipit at excepturi ipsa
                qui provident delectus, aut sunt deserunt assumenda voluptatum
                veniam facere? Maxime, ab praesentium.
            </ModalComponent>
        </>
    );
};

export const Modal = Template.bind({});
