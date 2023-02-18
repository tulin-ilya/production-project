import type { RouteProps } from "react-router-dom";
import { AboutPage } from "@pages/about-page";
import { MainPage } from "@pages/main-page";
import { ABOUT, MAIN, HOME } from "@shared/config/routes-config";

export const routes: RouteProps[] = [
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: `/${HOME}`,
        element: <MainPage />,
    },
    {
        path: `/${MAIN}`,
        element: <MainPage />,
    },
    {
        path: `/${ABOUT}`,
        element: <AboutPage />,
    },
];
