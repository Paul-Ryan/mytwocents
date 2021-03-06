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
import AuthorDashboardContainer from './author_dashboard/author_dashboard_container';
import GeneratorFormContainer from './generator_form/script_form_container';
import { AuthRoute, ProtectRoute } from '../utils/route_utils';

const App = () => (
  <div>
    <AuthRoute path='/' component={GlobalNav} />
    <ProtectRoute exact path='/dashboard' component={GlobalNav} />
    <ProtectRoute exact path='/dashboard' component={UserPageContainer} />
    <ProtectRoute exact path='/dashboard' component={AuthorDashboardContainer} />
    <ProtectRoute exact path='/dashboard' component={GeneratorFormContainer} />

    <Route exact path="/" component={SplashPageContainer} />
  </div>
);

export default App;
