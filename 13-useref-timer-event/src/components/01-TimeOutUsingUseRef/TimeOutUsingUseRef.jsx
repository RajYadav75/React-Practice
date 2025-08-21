import {useRef, useState} from "react";
/*
*   useRef()
*   let refName = useRef(null);
*   refName.current = value/function(){};
*/
export function TimeOutUsingUseRef() {
    const [msg, setMsg] = useState("");
    const thread2 = useRef(null);
    function Msg1(){
        setMsg("Hello !");
    }
    function Msg2(){
        setMsg("How are you?");
    }
    function Msg3(){
        setMsg("Welcome to the React!");
    }

    function handleClick(){
        setTimeout(Msg1,1000);
        thread2.current = setTimeout(Msg2,2000);
        setTimeout(Msg3,3000);
    }

    function handleCancelClick() {
        clearTimeout(thread2.current);
    }

    return (
        <div className="container-fluid">
            <button className="btn btn-primary mt-2" onClick={handleClick}>Display Message</button>
            <button className="btn btn-danger mt-2 ms-1" onClick={handleCancelClick}>Cancel Message 2</button>
            <p className="fs-4 text-center">{msg}</p>
        </div>
    )
}