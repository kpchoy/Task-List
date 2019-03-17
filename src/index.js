import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.css';
import App from './App';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
})
