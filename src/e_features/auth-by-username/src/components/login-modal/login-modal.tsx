import { Spinner } from "@shared/ui-kit/spinner";
import { Modal } from "@widgets/modal";
import cn from "classnames";
import { memo, Suspense } from "react";

import { LoginFormLazy as LoginForm } from "../login-form/login-form.lazy";
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
                <Suspense fallback={<Spinner />}>
                    <LoginForm />
                </Suspense>
            </Modal>
        );
    }
);
