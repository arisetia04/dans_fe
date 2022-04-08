import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import App from "../app";
import RequireAuth from "../pages/Auth/require_auth";
import Signout from "../pages/Auth/signout";
import Error404 from "../pages/Error/error404";
import NoInternet from "../pages/Error/noInternet";

const Signin = lazy(() => import("../pages/Auth/signin"));
const Job = lazy(() => import("../pages/Job/index"));

const Routes = () => {
    return (
        <Suspense fallback={<>loading....</>}>
            <Switch>
                <Route
                    path='/signin'
                    exact
                    component={(props) => <Signin {...props} />}
                />
                <Route
                    path='/signout'
                    exact
                    component={(props) => <Signout {...props} />}
                />
                <Route
                    path='/404'
                    exact
                    component={(props) => <Error404 {...props} />}
                />
                <Route
                    path='/connection_refused'
                    exact
                    component={(props) => <NoInternet {...props} />}
                />
                <App>
                    <Route path='/' exact component={RequireAuth(Job)} />
                </App>
            </Switch>
        </Suspense>
    );
};

export default Routes;
