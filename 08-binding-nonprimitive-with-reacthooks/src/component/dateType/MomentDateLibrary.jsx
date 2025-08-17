import {useState} from "react";
import moment from "moment";

export function MomentDateLibrary() {
    const [mfd] =useState(Date());
    return (
        <div>
            <p className={"h6"}>
                {
                    moment(mfd).format("dddd DD MMMM yyyy")
                }
            </p>
        </div>
    )
}