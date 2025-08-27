import {useState} from "react";

export function ReactHookForm() {
    const [msg, setMsg] = useState("");

    function handleCopy() {
        setMsg("Number Copied!");
    }

    function handlePaste() {
        document.onpaste=function (){
            return false;
        }
    }

    function handleBlur(){
        setMsg("");
    }

    return (
        <div className="container-fluid">
            <h2>React Hook Form</h2>
            <h2>Register User</h2>
            <dl>
                <dt>Account Number </dt>
                <dd>
                    <input type="text" onCopy={handleCopy} onBlur={handleBlur}/>
                </dd>
                <dd>{msg}</dd>
                <dt>Verify Account Number</dt>
                <dd>
                    <input type="text" onPaste={handlePaste}/>
                </dd>
            </dl>
        </div>
    )
}