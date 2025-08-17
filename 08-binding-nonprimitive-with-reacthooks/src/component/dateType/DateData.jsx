import {useState} from "react";

export function DateData() {
    const [now] = useState(Date());
    return (
        <div>
            <p className={"h5"}>{now}</p>
        </div>
    )
}