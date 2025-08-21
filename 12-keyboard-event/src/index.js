import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {KeyBoardEvent} from "./components/01-KeyBoardEvent/KeyBoardEvent";
import {DoubleAndRightMouseClick} from "./components/02-ButtonEvent/DoubleAndRightMouseClick";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <KeyBoardEvent/>
        <hr/>
        <DoubleAndRightMouseClick/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
