import { lazy } from "react";

const Login = lazy(() => import('../../Views/auth/login'));
const Register = lazy(() => import('../../Views/auth/Register'));
const AdminLogin = lazy(() => import('../../Views/auth/adminLogin'));
const Home = lazy(() => import('../../Views/Home'));

const PublicRoute = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },
    {
        path: 'admin/login',
        element: <AdminLogin/>
    }
]

export default PublicRoute;