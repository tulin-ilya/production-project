import type { LinkProps } from "react-router-dom";

import type { TComponentBaseProps } from "@shared/configs/component-base-type";

export type TAppLink = Omit<LinkProps, "className"> & TComponentBaseProps & {};
