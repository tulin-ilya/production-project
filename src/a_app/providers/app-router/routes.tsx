import { AboutPage } from "@pages/about-page";
import { MainPage } from "@pages/main-page";
import { NotFoundPage } from "@pages/not-found-page";
import { ProfilePage } from "@pages/profile-page";
import { ABOUT, HOME, MAIN, PROFILE } from "@shared/configs/routes-config";
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
        path: `/${PROFILE}`,
        element: <ProfilePage />,
    },
    // last
    {
        path: "*",
        element: <NotFoundPage />,
    },
];
