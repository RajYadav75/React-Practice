import {useEffect} from "react";

export function Register() {
    useEffect(() => {
        console.log("Register Component Mounted");
        return () => console.log("Register Component Unmounted");
    }, []);
    return (
        <div className="container-fluid">
            <h3>Register User</h3>
        </div>
    )
}