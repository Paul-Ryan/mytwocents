import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState = {};
  if (window.currentUser) {
    preloadedState = {
      session: {currentUser: window.currentUser}
    };
  }
  const root = document.getElementById('root');
  // root.innerHTML = "<h3>Webpack packed</h3>";
  delete window.currentUser;
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
