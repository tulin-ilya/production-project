import "./styles/index.css";

import { AppRouter } from "@app/providers/app-router/app-router";
import customCN from "@tools/classnames";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import cn from "classnames";
import { Suspense } from "react";

const AppCompoenent = () => {
    return (
        <div className={customCN("app", {}, [])}>
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
