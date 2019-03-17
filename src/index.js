import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
import App from './App';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
})
