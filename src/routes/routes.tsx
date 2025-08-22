import { Route, Routes } from "react-router";
import { HomePage } from "../pages/home";

export function MainRoutes() {
    const routes = [
        { path: "/", element: <HomePage /> }
    ]
    return (
        <Routes>
            {routes.map((route) => (
                <Route key={route.path} element={route.element} path={route.path} />
            ))}
        </Routes>
    )
}