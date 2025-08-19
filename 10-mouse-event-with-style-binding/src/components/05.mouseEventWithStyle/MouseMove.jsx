import {useState} from "react";

export function MouseMove(){
    const [styleObj, setStyleObj] = useState({position:"",left:"",top:""});
    function handleMouseMove(e){
        setStyleObj({position: "absolute",left:e.clientX+"px",top:e.clientY+"px"});
    }
    return (
        <div onMouseMove={handleMouseMove} className="container-fluid">
            <div style={{height:"1000px"}}>Move your mouse pointer to test</div>
            <img src="https://tse2.mm.bing.net/th/id/OIP.XpkfwcHtLyYLQlq0E7bslgAAAA?pid=Api&P=0&h=180"  width={"50"}  height={"50"} alt=""/>
        </div>
    )
}