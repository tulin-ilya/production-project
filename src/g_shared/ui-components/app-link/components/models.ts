import type { LinkProps } from "react-router-dom";

import type { TUiComponentBaseType } from "@shared/configs/ui-components-base-type";

export type TAppLink = Omit<LinkProps, "className"> & TUiComponentBaseType;
