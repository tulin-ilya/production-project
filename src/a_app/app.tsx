import { AppRouter } from "@app/providers/app-router/components/app-router";
import { useTheme } from "@app/providers/theme-provider";
import { Navbar } from "@widgets/navbar";
import customCN from "@shared/lib/classnames";
import "@app/styles/index.css";

const AppCompoenent = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={customCN("app", {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default AppCompoenent;
