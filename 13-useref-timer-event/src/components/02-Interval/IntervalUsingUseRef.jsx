import {useRef, useState} from "react";

export function IntervalUsingUseRef() {
    const [toggleButton, setToggleButton] = useState("d-block");
    const [toggleProgress, setToggleProgress] = useState("d-none");
    const [toggleImage, setToggleImage] = useState("d-none");
    const [progressValue, setProgressValue] = useState(1);
    const thread = useRef(null);
    const count = useRef(1);

    function StartProgress() {
        count.current = count.current + 1;
        setProgressValue(count.current);
        if (count.current == 100) {
            setToggleProgress("d-none");
            setToggleImage("d-block");
        }
    }

    function handleLoadClick(){
        setToggleButton("d-none");
        setToggleProgress("d-block");
        thread.current = setInterval(StartProgress, 100);
    }
    function handlePauseClick(){
        clearInterval(thread.current);
    }
    function handlePlayClick(){
        thread.current = setInterval(StartProgress, 100);
    }

    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center align-items-center" style={{height:"100vh"}}>
                <div className="text-center">
                    <div className="toggleButton">
                        <button onClick={handleLoadClick} className="btn btn-primary">Load Image</button>
                    </div>
                    <div className="toggleProgress">
                        <progress min="1" max="100" value={"progressValue"} style={{width:"400px",height:"30px"}}></progress>
                        <div>
                            {progressValue}% Completed
                        </div>
                        <div className="mt-2">
                            <button className="btn btn-warning bi bi-pause" onClick={handlePauseClick}></button>
                            <button className="btn btn-success ms-1 bi bi-play" onClick={handlePlayClick}></button>
                        </div>
                    </div>
                    <div className="toggleImage">
                        <img src="ironman.png" alt="" width="300" height="400"/>
                    </div>
                </div>
            </div>
        </div>
    )
}