import { useTheme } from "@app/providers/theme-provider";
import { useEffect, useMemo, useRef, useState } from "react";

export const useApp = () => {
    const [sidebarOffset, setSidebarOffset] = useState<number | undefined>();

    const navbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setSidebarOffset(navbarRef.current?.offsetHeight);
    }, []);

    const { theme } = useTheme();

    return { navbarRef, sidebarOffset, theme };
};
