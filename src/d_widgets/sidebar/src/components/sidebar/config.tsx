import { ABOUT, MAIN } from "@shared/configs/routes-config";
import { AboutIcon } from "@shared/ui-kit/icons/about-icon";
import { HomeIcon } from "@shared/ui-kit/icons/home-icon";

import type { TSidebarLinkProps } from "../sidebar-link/models";

export const sidebarLinksList: Pick<
    TSidebarLinkProps,
    "icon" | "label" | "path"
>[] = [
    {
        path: `/${MAIN}`,
        label: "home",
        icon: <HomeIcon />,
    },
    {
        path: `/${ABOUT}`,
        label: "about",
        icon: <AboutIcon />,
    },
];
