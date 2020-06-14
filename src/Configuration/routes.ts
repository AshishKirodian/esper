import Home from "../Home/Container/homeCon";
import Devices from "../Devices/Container/devicesCon";
import Group from "../Group/Container/groupCon";

export interface RouteInterface {
    path: string;
    component: any;
    exact: boolean;
}

export const ROUTES: RouteInterface[] = [
    {
        path: '/devices',
        component: Devices,
        exact: true
    },
    {
        path: '/groups',
        component: Group,
        exact: true
    },
    {
        path: '/',
        component: Home,
        exact: true
    }
];