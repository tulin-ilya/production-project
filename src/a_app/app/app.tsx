import "./styles/index.css";

import { AppRouter } from "@app/providers/app-router/app-router";
import customCN from "@tools/classnames";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import cn from "classnames";
import { Suspense } from "react";

import { useApp } from "./hooks/use-app";

const AppCompoenent = () => {
    const { theme } = useApp();

    return (
        <div className={customCN("app", {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className={cn("content-page")}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default AppCompoenent;
