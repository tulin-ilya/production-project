import { Button } from "@shared/ui-kit/button";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Modal } from "@widgets/modal";
import { useState } from "react";

import { Portal as PortalComponent } from "../index";
import { ARGS, ARGS_TYPES } from "./config";

export default {
    title: "UI-kit/Portal",
    component: PortalComponent,
    args: ARGS,
    argTypes: ARGS_TYPES,
} as ComponentMeta<typeof PortalComponent>;

const Template: ComponentStory<typeof PortalComponent> = (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>open modal</Button>
            <PortalComponent {...args}>
                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quidem ratione nisi praesentium architecto suscipit at
                    excepturi ipsa qui provident delectus, aut sunt deserunt
                    assumenda voluptatum veniam facere? Maxime, ab praesentium.
                </Modal>
            </PortalComponent>
        </>
    );
};

export const Portal = Template.bind({});
