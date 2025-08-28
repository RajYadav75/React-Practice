import {useState} from "react";
import {Login} from "./Login";
import {Register} from "./Register";

export function Mount() {
    const [component, setComponent] = useState();

    function handleLoginClick() {
        setComponent(<Login/>);
    }
    function handleRegisterClick() {
        setComponent(<Register/>)
    }

    return (
        <div className="container-fluid">
            <div className="mt-3">
                <button className="btn btn-primary me-2" onClick={handleLoginClick}>Login</button>
                <button className="btn btn-warning" onClick={handleRegisterClick}>Register</button>
            </div>
            <div className="mt-4">
                {component}
            </div>
        </div>
    )
}