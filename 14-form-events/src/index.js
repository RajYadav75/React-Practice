import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import {FormDefault} from "./components/ React Default Form Handling/FormDefault";
import {FormikForm} from "./components/01-Formik/FormikForm";
import {FormikFormValidation} from "./components/01.1-Formik Validation/FormikFormValidation";
import {FormikFormYupValidation} from "./components/01.2-Formik Yup Validation/FormikFormYupValidation";
import {FormikSpreadApproach} from "./components/01.3-Formik Spread Approach/FormikSpreadApproach";
import {FormikFormComponent} from "./components/01.4-Formik-Form-Component/FormikFormComponent";
import {
    FormikFormComponentInputStateValidation
} from "./components/01.4-Formik-Form-Component/Input Validations/FormikFormComponentInputStateValidation";
import {ReactHookForm} from "./components/03-React Hook Form/ReactHookForm";
import {ReactHookFormTouchEvent} from "./components/03-React Hook Form/ReactHookFormTouchEvent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FormDefault/>
        <hr/>
        <br/>
        <FormikForm/>
        <hr/>
        <br/>
        <FormikFormValidation/>
        <hr/>
        <br/>
        <FormikFormYupValidation/>
        <hr/>
        <br/>
        <FormikSpreadApproach/>
        <hr/>
        <br/>
        <FormikFormComponent/>

        <hr/>
        <br/>
        <FormikFormComponentInputStateValidation/>
        <hr/>
        <br/>
        <ReactHookForm/>
        <hr/>
        <br/>
        <ReactHookFormTouchEvent/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
