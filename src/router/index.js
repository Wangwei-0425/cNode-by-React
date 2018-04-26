import React,{ Component } from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';

import Index from '../views/index';
import About from '../views/about';
import Detail from '../views/details';
import Tutorial from '../views/tutorial';
import User from '../views/user';

class Router extends Component {

    render() {

        return (

            <Switch>
                <Route path="/" exact render={() => (<Redirect to="/index/all" />)} />
                <Route path="/index/:id" component={Index} />
                <Route path="/detail/:id" component={Detail} />
                <Route path="/tutorial" component={Tutorial} />
                <Route path="/user/:id" component={User} />
                <Route Path="/about" component={About} />
            </Switch>

        );

    }

}

export default Router;