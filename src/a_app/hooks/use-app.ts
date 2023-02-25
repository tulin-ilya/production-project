import { useTheme } from "@app/providers/theme-provider";
import { useEffect, useRef, useState } from "react";

export const useApp = () => {
    const [sidebarOffset, setSidebarOffset] = useState<number>();

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const temp = navbarRef.current?.getBoundingClientRect();
        console.log(temp);

        // setSidebarOffset(navbarRef.current?.offsetHeight);
    }, [navbarRef]);

    const { theme } = useTheme();

    return { navbarRef, sidebarOffset, theme };
};
