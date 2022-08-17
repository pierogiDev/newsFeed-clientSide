import {FC} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Layout} from "./Layout";
import {RouterSetting, type routerSetting} from "./RouterSetting";

export const Router: FC = () => {
    return (
            <Route path={"/"} render={({match: {url}}) => (
                <Switch>
                    {RouterSetting.map((route: routerSetting, index: number) => {
                        return (
                            <Route key={index} exact={route.exact} path={`${url}${route.path}`}>
                                <Layout>{route.children}</Layout>
                            </Route>
                            )
                    })}
                    <Route path={"*"}>
                        <Redirect to={"/"}/>
                    </Route>
                </Switch>
            )}/>
    )
}
