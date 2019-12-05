import {Route, Switch,Redirect} from"react-router-dom";
//create Router
import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../Routes/Auth';
import Feed from '../Routes/Feed'
import Explore from '../Routes/Explore';
import Search from '../Routes/Search';
import Profile from '../Routes/Profile';
// import Post from '../Routes/Post';

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={Feed} />
        <Route path="/:username" component={Profile} />
        <Route path="/search" component={Search} />
        <Route path="/explore" component={Explore}/> 
        <Redirect from="*" to="/"/>
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