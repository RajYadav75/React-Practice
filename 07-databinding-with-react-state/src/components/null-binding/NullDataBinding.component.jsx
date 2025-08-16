import {useEffect, useState} from "react";

export default function NullDataBindingComponent() {
    const [age,setAge] = useState();
    useEffect(() => {
        setAge(prompt("Enter Age"));
    }, []);
    return(
        <div className="container-fluid">
            <p>My age is <b>{(age==null)?"Enter Age":age}</b></p>
        </div>
    )
}