// 3rd party
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// utils
import Menu from '@pages/Menu';
import routes from '@pages/routes';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                    <Route path="/" element={<Navigate to="/home" />} />
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            path={route.path.replace(/^\//, '')}
                            element={route.element}
                        />
                    ))}
                </Route>
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </BrowserRouter>
    );
}
