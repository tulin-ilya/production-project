import { Suspense } from "react";
import cn from "classnames";

import { AppRouter } from "@app/providers/app-router/components/app-router";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import customCN from "@shared/lib/classnames";
import "@app/styles/index.css";

import { useApp } from "./hooks/use-app";

const AppCompoenent = () => {
    const { navbarRef, sidebarOffset, theme } = useApp();

    return (
        <div className={customCN("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar ref={navbarRef} />
                <div className={cn("content-page")}>
                    <Sidebar upperOffset={sidebarOffset} />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default AppCompoenent;
