import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import SplashPageContainer from './splash_page/splash_page_container';
import UserPageContainer from './user_page/user_page_container';

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={SplashPageContainer} />
      <Route exact path="/users/:userId" component={UserPageContainer} />
    </Switch>
  </div>
);

export default App;
