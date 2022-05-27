import NotFound from "../pages/404";
import counterpage from "../pages/counterpage";
import homepage from "../pages/homepage";
import { IRoute } from "./interfaces/index";


const routes: IRoute[] = [
    {
        path: "/",
        name: "Home",
        component: homepage,
        exact: true,
    },
    // {
    //     path: "/counterpage",
    //     name: "About",
    //     component: counterpage,
    // },
    {
        path: '/notfound',
        name: 'NotFound',
        component: NotFound
    }

]


export default routes;