import React from 'react';
import ReactDOM from 'react-dom/client';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DataBindingComponent from "./components/data-binding/Databinding.component";
import StringBindingComponent from "./components/BindingStringType/StringBinding.component";
import UndefinedDataBindingComponent from "./components/undefinedTypeBinding/UndefinedBinding.component";
import NullDataBindingComponent from "./components/null-binding/NullDataBinding.component";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataBindingComponent/>
      <StringBindingComponent/>
      <UndefinedDataBindingComponent/>
      <NullDataBindingComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
