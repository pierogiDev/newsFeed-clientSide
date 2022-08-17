import {News} from "./News";
import {SearchResult} from "./SearchResult";

export type routerSetting = {
    path: string,
    exact: boolean,
    children: JSX.Element
}

export const RouterSetting: Array<routerSetting> = [
    {
        path: "",
        exact: true,
        children: <News/>,
    },
    {
        path: "result",
        exact: true,
        children: <SearchResult/>,
    },
];
