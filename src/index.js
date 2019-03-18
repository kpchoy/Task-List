import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
})
