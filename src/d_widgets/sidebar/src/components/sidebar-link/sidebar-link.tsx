import { AppLink } from "@shared/ui-kit/app-link";
import { memo } from "react";

import { TSidebarLinkProps } from "./models";

export const SidebarLink = memo(
    ({
        collapsed,
        icon,
        path,
        label,
        view = "secondary",
    }: TSidebarLinkProps) => (
        <AppLink view={view} to={path}>
            {icon}
            {!collapsed ? label : null}
        </AppLink>
    )
);
