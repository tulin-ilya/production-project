import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useAppRoutes } from "../hooks/use-app-routes";

export const AppRouter = () => {
    const { routes } = useAppRoutes();

    return (
        <Suspense fallback={<div>loading...</div>}>
            <Routes>
                {routes.map((item) => (
                    <Route key={item.path} {...item} />
                ))}
            </Routes>
        </Suspense>
    );
};

// export default AppRouter;
