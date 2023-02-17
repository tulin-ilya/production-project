import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import cn from "./helpers/classnames";
import { AboutPageLazy } from "./pages/about-page/about-page.lazy";
import { MainPageLazy } from "./pages/main-page/main-page.lazy";
import { useTheme } from "./theme-provider/use-theme";
import "./styles/index.css";

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={cn("app", {}, [theme])}>
            <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>{" "}
            <button onClick={toggleTheme}>toggle theme</button>
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageLazy />} />
                    <Route path="/about" element={<AboutPageLazy />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
