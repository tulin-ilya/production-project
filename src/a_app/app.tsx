import { Link } from "react-router-dom";

import { AppRouter } from "@app/providers/app-router/components/app-router";
import { useTheme } from "@app/providers/theme-provider";
import cn from "@shared/lib/classnames";
import "@app/styles/index.css";

const AppCompoenent = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cn("app", {}, [theme])}>
            <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>{" "}
            <button onClick={toggleTheme}>toggle theme</button>
            <AppRouter />
        </div>
    );
};

export default AppCompoenent;
