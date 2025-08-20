import {useState} from "react";
import axios from "axios";

export function KeyBoardEvent() {
    const [error, setError] = useState("");
    const [validClass, setValidClass] = useState("");
    const [toggle, setToggle] = useState("d-none");
    const [styleObj, setStyleObj] = useState({width: ""});
    const [progressColor, setProgressColor] = useState("");
    const [msg, setMsg] = useState("");

    function VerifyUserId(event) {
        axios.get("users.json")
            .then(res => {
                var user = res.data.find(item => item.UserId === event.target.value);
                if (user) {
                    if (user.UserId === event.target.value) {
                        setError("User ID Taken - Try Another");
                        setValidClass("text-danger");
                    }
                } else {
                    setError("User ID Available");
                    setValidClass("text-success");
                }
            })
    }

    function handleCaps(event) {
        if (event.which >= 65 && event.which <= 90) {
            setToggle("d-block");
        } else {
            setToggle("d-none");
        }
    }

    function handlePassword(event) {
        if (event.target.value.match(/(?=.*[A-Z])\w{4,15}/))
        {
            setStyleObj({width: "100%"});
            setProgressColor("bg-success");
            setMsg("Strong");
        }
    else
        {
            if (event.target.value.length < 4) {
                setStyleObj({width: "20%"});
                setProgressColor("bg-danger");
                setMsg("Poor");
            } else {
                setStyleObj({width: "70%"});
                setProgressColor("bg-warning");
                setMsg("WEAK");
            }
        }
    }

    return (
        <div className={"container-fluid"}>
            <h2>Register User</h2>
            <dl className="w-25">
                <dt>User Id</dt>
                <dd>
                    <input type="text" className="form-control" placeholder="User Id" onKeyUp={VerifyUserId} />
                </dd>
                <dd className={validClass}>{error}</dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" className="form-control" onKeyUp={handlePassword} onKeyPress={handleCaps}/>
                </dd>
                <dd>
                    <div className="progress">
                        <div className={`progress-bar progress-bar-animated progress-bar-striped ${progressColor}`}>{msg}</div>
                    </div>
                </dd>
                <dd className="toggle">
                    <span className="bi bi-exclamation-triangle-fill text-warning">Warning: CAPS is ON</span>
                </dd>
            </dl>
        </div>
    )
}