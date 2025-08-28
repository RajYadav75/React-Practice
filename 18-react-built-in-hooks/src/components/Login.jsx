import {useEffect} from "react";

export function Login() {
    useEffect(() => {
        console.log("Login Component Mounted");
        return () => console.log("Login Component UnMounted");
    }, []);
    return (
        <div className="container-fluid">
            <h3>User Login</h3>
        </div>
    )
}