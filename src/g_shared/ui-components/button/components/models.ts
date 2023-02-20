import { TComponentBaseProps } from "@shared/configs/component-base-type";
import { ButtonHTMLAttributes } from "react";

export type TButtonProps = TComponentBaseProps &
    ButtonHTMLAttributes<HTMLButtonElement> & {};
