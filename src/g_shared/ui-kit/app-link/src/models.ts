import type { TComponentBaseProps } from "@shared/configs/component-base-type";
import { LinkProps } from "react-router-dom";

export type TAppLink = Omit<LinkProps, "className"> & TComponentBaseProps;
