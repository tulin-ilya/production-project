import cn from "classnames";

import { AppRouter } from "@app/providers/app-router/components/app-router";
import { Navbar } from "@widgets/navbar";
import customCN from "@shared/lib/classnames";
import "@app/styles/index.css";

import { useApp } from "./hooks/use-app";
import { Sidebar } from "@widgets/sidebar";

const AppCompoenent = () => {
    const { navbarRef, sidebarOffset, theme } = useApp();

    return (
        <div className={customCN("app", {}, [theme])}>
            <Navbar ref={navbarRef} />
            <div className={cn("content-page")}>
                <Sidebar upperOffset={sidebarOffset} />
                <AppRouter />
            </div>
        </div>
    );
};

export default AppCompoenent;
