import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import GlobalNav from './nav_bar/nav_bar_container';
import SplashPageContainer from './splash_page/splash_page_container';
import UserPageContainer from './user_page/user_page_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';

const App = () => (
  <div>
    <AuthRoute path='/' component={GlobalNav} />
    <ProtectRoute exact path='/dashboard' component={GlobalNav} />
    <ProtectRoute exact path='/dashboard' component={UserPageContainer} />
    
    <Route exact path="/" component={SplashPageContainer} />
  </div>
);

export default App;
