import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../views/home/home';
import DynamicObjective from '../views/dynamicObjective/dynamicObjective';
import Chart from '../views/chart/chart';

class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/dynamic-Objective' component={DynamicObjective} />
                <Route exact path='/chart' component={Chart} />
                <Redirect path='**' to='/' />
            </Switch>
        );
    };
};

export default AppRoutes;