import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  root.innerHTML = "<h3>Webpack packed</h3>";
  ReactDOM.render(<Root/>, root);
});
