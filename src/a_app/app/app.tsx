import "./styles/index.css";

import { AppRouter } from "@app/providers/app-router/app-router";
import { userActions } from "@entities/user";
import customCN from "@tools/classnames";
import { Navbar } from "@widgets/navbar";
import { Sidebar } from "@widgets/sidebar";
import cn from "classnames";
import { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";

const AppCompoenent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

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
