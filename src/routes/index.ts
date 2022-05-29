import NotFound from "../pages/404";
import homepage from "../pages/homepage";
import users from "../pages/users";
import { IRoute } from "./interfaces/index";


const routes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        component: users,
        exact: true,
    },
    {
        path: "/users",
        name: "Users",
        component: users,
        exact: true,
    },
    {
        path: "/report",
        exact: true,
        name: "Report",
        component: homepage,
    },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound
    }

]


export default routes;