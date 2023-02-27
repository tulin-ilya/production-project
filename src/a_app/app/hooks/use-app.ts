import { useTheme } from "@app/providers/theme-provider";

export const useApp = () => {
    const { theme } = useTheme();

    return { theme };
};
