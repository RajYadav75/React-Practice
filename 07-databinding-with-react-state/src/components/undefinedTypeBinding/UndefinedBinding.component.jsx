import {useEffect, useState} from "react";

export default function  UndefinedDataBindingComponent(){
    const [age,setAge] = useState();
    useEffect(()=>{
        setAge(22);
    })
    return(
        <div className="container-fluid">
            <p>My age is <b>{(age)?age:"Please enter age"}</b></p>
        </div>
    )
}