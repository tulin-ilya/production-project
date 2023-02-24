import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppRoutes } from "../hooks/use-app-routes";

export const AppRouter = () => {
    const { routes } = useAppRoutes();

    return (
        <div className="page-wrapper">
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    {routes.map((item) => (
                        <Route key={item.path} {...item} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};
