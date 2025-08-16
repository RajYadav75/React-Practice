import {useEffect,useState} from "react";
export default function DataBindingComponent() {
    const  [price,setPrice] = useState(44000.00);
    useEffect(() => {
        setPrice(70000.65);
    }, []);
    return (
        <div>
            <h2>Data Binding</h2>
            Price: {price}
        </div>
    )
}