import "./mouse1.css";
import {useState} from "react";
export function MoreEventDemo() {
    const [styleObj, setStyleObj] = useState({animationName:"Rotate",animationDuration:"5s",animationIterationCount:"infinite",animationTimingFunction:"linear"});

    function handleMouseOver() {
        setStyleObj({animationName: "Rotate",animationDuration: "1s",animationIterationCount: "infinite",animationTimingFunction:"linear"});
    }

    function handleMouseOut(){
        setStyleObj({animationName: "Rotate",animationDuration: "5s",animationIterationCount: "infinite",animationTimingFunction:"linear"});
    }

    function handleMouseDown(){
        setStyleObj({animationName: "Zoom",animationDuration: "5s",animationIterationCount: "infinite",animationTimingFunction:"linear"});
    }

    return (
        <div className={"container-fluid"}>
            <div className={"d-flex bg-dark justify-content-center align-items-center"} style={{height:'100vh'}}>
                <img src="https://logos.flamingtext.com/Name-Logos/Raj-design-amped-name.png" alt="" className={"logo"} onMouseDown={handleMouseDown} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
            </div>
        </div>
    )
}