import { Modal } from "@widgets/modal";
import cn from "classnames";
import { memo } from "react";

import { LoginForm } from "../login-form/login-form";
import { TLoginModalProps } from "./models";

export const LoginModal = memo(
    ({ isOpen, className, onClose }: TLoginModalProps) => {
        return (
            <Modal
                lazy
                className={cn(className)}
                isOpen={isOpen}
                onClose={onClose}
            >
                <LoginForm />
            </Modal>
        );
    }
);
