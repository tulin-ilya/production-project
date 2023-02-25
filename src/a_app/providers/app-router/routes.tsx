import { AboutPage } from "@pages/about-page";
import { MainPage } from "@pages/main-page";
import { NotFoundPage } from "@pages/not-found-page";
import { ABOUT, HOME, MAIN } from "@shared/configs/routes-config";
import type { RouteProps } from "react-router-dom";

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
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
