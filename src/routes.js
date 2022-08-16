import {
    ADMIN_ROUTE,
    AUTH_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PORTFOLIO_ROUTE,
    TABLE_ROUTE,
    WORK_ROUTE
} from "./utils/consts";
import Main from "./pages/Main";
import Portfolio from "./pages/Portfolio";
import Work from "./pages/Work";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import My_TablePage from "./pages/My_TablePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PORTFOLIO_ROUTE,
        Component: Portfolio
    },
    {
        path: WORK_ROUTE + '/:id',
        Component: Work
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: TABLE_ROUTE,
        Component: My_TablePage
    },
]