import { useCallback, useState } from "react";

export const useSidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = useCallback(() => {
        setCollapsed((prev) => !prev);
    }, []);

    return { onToggle, collapsed };
};
