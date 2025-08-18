import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import reportWebVitals from './reportWebVitals';
import EventBinding from "./components/ReactEventBinding/EventBinding";
import {CustomEvent} from "./components/ReactEventBinding/CustomEvent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <h3>Normal Event</h3>
    <EventBinding />
      <br/>
      <hr/>
      <h3>Custom Event</h3>
      <CustomEvent/>
      <br/>
      <hr/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
