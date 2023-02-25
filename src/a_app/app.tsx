import "@app/styles/index.css";

import { AppRouter } from "@app/providers/app-router/app-router";
import customCN from "@shared/lib/classnames";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import cn from "classnames";
import { Suspense } from "react";

import { useApp } from "./hooks/use-app";

const AppCompoenent = () => {
    const { navbarRef, sidebarOffset, theme } = useApp();
    // console.log(sidebarOffset);

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
