import {useState} from "react";

export function MouseEvent() {
    const [styleObj, setStyleObj] = useState({color:'black'});

    function handleMouseOver(e){
        setStyleObj({color:e.target.id});
    }

    function handleMouseOut(){
        setStyleObj({color:'black'});
    }


    return (
        <div className={"container-fluid"}>
            <h3>Mouse Event</h3>
            <div className="d-flex p-4 text-white text-center">
                <div id="red" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} style={{width:'100px',backgroundColor:'red'}}>Red</div>
                <div id="green" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} style={{width:'100px',backgroundColor:'green'}}>Green</div>
                <div id="blue" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver} style={{width:'100px',backgroundColor:'blue'}}>Blue</div>
            </div>
            <h1 style={styleObj}>Raj Is Best</h1>
        </div>
    )
}