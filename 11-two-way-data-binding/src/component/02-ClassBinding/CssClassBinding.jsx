/* TODO:- Syntax
<div className={'cssClassName'+dynamicName}></div>
<div className={`cssClassName ${dynamicName}`}></div>
*/

import {useState} from "react";

export function CssClassBinding() {
    const [theme, setTheme] = useState("bg-light");
    const [btnTheme, setBtnTheme] = useState("btn btn-dark w-100");

    function handleThemeChange(event) {
        if (event.target.checked) {
            setTheme("bg-dark text-white");
            setBtnTheme("btn btn-light w-100");
        }else{
            setTheme("bg-light");
            setBtnTheme("btn btn-dark w-100");
        }
    }
    return (
        <div className={"container-fluid d-flex justify-content-center"}>
            <form action="" className={`mt-4 p-4 border border-1 rounded ${theme}}`}>
                <div className="form-switch">
                    <input type="checkbox" onChange={handleThemeChange} className={"form-check-input"}/>
                    <label className={"form-check-label ms-2"}>Dark Theme</label>
                </div>
                <h3 className="bi bi-person-fill">SignIn</h3>
                <dl>
                    <dt>UserName</dt>
                    <dd>
                        <input type="text" className="form-control" />
                    </dd>
                    <dt>Password</dt>
                    <dd>
                        <input type="password" className={"form-control"}/>
                    </dd>
                </dl>
                <button className={btnTheme}>Login</button>
            </form>
        </div>
    )
}