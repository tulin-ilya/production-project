import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { useTheme } from "@shared/providers/theme-provider";
import { MainPage } from "@pages/main-page";
import { AboutPage } from "@pages/about-page";
import cn from "../g_shared/lib/classnames";
import "@shared/styles/index.css";

const AppCompoenent = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cn("app", {}, [theme])}>
            <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>{" "}
            <button onClick={toggleTheme}>toggle theme</button>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppCompoenent;
