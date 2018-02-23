import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    console.log("script running");
  const root = document.getElementById('root');
  root.innerHTML = "<h3>Webpack packed</h3>";
  ReactDOM.render(<Root store={configureStore()} />, root);
});
