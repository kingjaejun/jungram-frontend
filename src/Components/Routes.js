import {Route, Switch,Redirect} from"react-router-dom";
//create Router
import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../Routes/Auth';
import Feed from '../Routes/Feed'
import Explore from '../Routes/Explore/index';
import Search from '../Routes/Search/index';
import Profile from '../Routes/Profile/index';


const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/explore" component={Explore}/>
        <Route path="/search" component={Search} />
        <Route path="/:username" component={Profile} />
        <Redirect from="*" to="/" />
    </Switch>
);
const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth}></Route>
        <Redirect from="*" to="/" />
    </Switch>
);
const AppRouter = ({isLoggedIn})=>  (
    isLoggedIn ? <LoggedInRoutes />: <LoggedOutRoutes />  
);
AppRouter.propTypes={
    isLoggedIn:PropTypes.bool.isRequired
};
export default AppRouter;