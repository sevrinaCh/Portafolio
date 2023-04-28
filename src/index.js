import React from 'react';
import { render } from 'react-dom';
//import ReactDOM from 'react-dom/client';
import './App.css';
import ReactDOM from 'react-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
