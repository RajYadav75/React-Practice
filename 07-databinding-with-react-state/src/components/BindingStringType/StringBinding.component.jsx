import {useEffect, useState} from "react";

export default function StringBindingComponent() {
    const [productName,setProductName] = useState();
    const [bgStyle,setbgStyle] = useState();
    useEffect(() => {
        setProductName("Samsung TV");
        setbgStyle("bg-warning");
    },[])
    return (
        <div className="container-fluid">
           <h2 className={`text-center text-danger {productName}  ${bgStyle}`}>Data Binding</h2>
            <dl>
                <dt>Name</dt>
                <dd>{productName}</dd>
            </dl>
        </div>
    )
}