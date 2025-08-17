import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import ArrayDataBinding from "./component/arraytypes/ArrayDataBinding";
import ObjectDataBindingUsingXMLHTTPReq from "./component/objecttypes/ObjectDataBinding";
import ObjectDataBindingUsingFetch from "./component/objecttypes/ObjectDataBindingUsingFetch";
import ObjectDataBindingUsingJQueryAjax from "./component/objecttypes/ObjectDataBindingUsingJQueryAjax";
import {ObjectDataBindingUsingAxios} from "./component/objecttypes/ObjectDataBindingUsingAxios";
import {Courses} from "./component/usingAxios/Courses";
import {NestedData} from "./component/usingAxios/NestedData";
import {DateData} from "./component/dateType/DateData";
import {MomentDateLibrary} from "./component/dateType/MomentDateLibrary";
import {RegularExpComponent} from "./component/RegularExpression/RegularExpComponent";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ArrayDataBinding/>
        <ObjectDataBindingUsingXMLHTTPReq/>
        <br/>
        <ObjectDataBindingUsingFetch/>
        <hr/>
        <ObjectDataBindingUsingJQueryAjax/>
        <hr/>
        <br/>
        <ObjectDataBindingUsingAxios/>
        <br/>
        <h3>Courses</h3>
        <hr/>
        <Courses/>
        <br/>
        <h3>Nested Data</h3>
        <hr/>
        <NestedData/>
        <br/>
        <h3>Date</h3>
        <hr/>
        <DateData/>
        <br/>
        <h3>Moment-Date</h3>
        <MomentDateLibrary/>
        <hr/>
        <br/>
        <h3>Regular Expression</h3>
        <RegularExpComponent/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
