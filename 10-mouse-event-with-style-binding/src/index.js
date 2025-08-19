import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import {MouseEvent} from "./components/01.mouseEventWithStyle/MouseEvent";
import {PhoneMouseEventStyle} from "./components/02.mouseEventWithStyle/PhoneMouseEventStyle";
import {EventDemo} from "./components/03.mouseEventWithStyle/Event-demo";
import {MoreEventDemo} from "./components/04.mouseEventWithStyle/MoreEventDemo";
import {MouseMove} from "./components/05.mouseEventWithStyle/MouseMove";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MouseEvent />
      <hr/>
      <br/>
      <PhoneMouseEventStyle/>
      <hr/>
      <br/>
      <EventDemo/>
      <hr/>
      <br/>
      <MoreEventDemo/>
      <hr/>
      <br/>
      <MouseMove/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
