import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { ButtonHTMLAttributes } from "react";

export type TButtonPublicProps = TComponentBaseProps;

export type TButtonProps = TButtonPublicProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {
        disabled?: boolean;
    };
