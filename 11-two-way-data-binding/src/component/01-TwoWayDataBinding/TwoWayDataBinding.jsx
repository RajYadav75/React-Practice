
/*
* function handleChange(event){
*   setValue(event.target.value);
* }
* <input type="text" onChange={handleChange}/>
* */

import {useState} from "react";

export function TwoWayDataBinding() {
    const [name, setName] = useState("TV");
    const [nameError, setNameError] = useState();

    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleBlur(event) {
        if (event.target.value.length === 0){
            setNameError("Name Required");
        }else{
            setNameError("");
            setName(event.target.value.toUpperCase());
        }
    }

    function handleFocus(){
        setNameError("Name in Block Letter");
    }
    return (
        <div className={"container-fluid"}>
            <h3>Two Way DataBinding</h3>
            <dl>
                <dt>Product Name</dt>
                <dd>
                    <input type="text" value={name} onFocus={handleFocus} onBlur={handleBlur} onChange={handleNameChange}/>
                </dd>
                <dd className={"text-danger"}>{nameError}</dd>
            </dl>
            <h3>Details</h3>
            <dl>
                <dt>Name</dt>
                <dd>{name}</dd>
            </dl>

        </div>
    )
}