import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppRoutes } from "../hooks/use-app-routes";

export const AppRouter = () => {
    const { routes } = useAppRoutes();

    return (
        <div className="page-wrapper">
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

// export default AppRouter;
