import React from "react";
import Main from "./pages";
import ProjectAdd from "./pages/projects/add-project";
import ProjectEdit from "./pages/projects/edit-project";
import Layout from "./layout";
import { Navigate, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const routes = [
    {
        layout: Layout,
        children: [
            { path: "/", element: <Main /> },
            { path: "/project/add", element: <ProjectAdd /> },
            { path: "/project/edit/:projectId", element: <ProjectEdit /> },
        ],
    },
    {
        layout: React.Fragment,
        children: [
            { path: "*", element: <Navigate to="/" replace /> },
        ],
    },
];

const AppRoutes = () => (
    <Routes>
        {routes.map((route) => {
            const LayoutComponent = route.layout;
            return route.children.map((route) => (
                <Route
                    key={`${route.path}`}
                    path={route.path}
                    element={<LayoutComponent>{route.element}</LayoutComponent>}
                />
            ));
        })}
    </Routes>
);



export default AppRoutes;
