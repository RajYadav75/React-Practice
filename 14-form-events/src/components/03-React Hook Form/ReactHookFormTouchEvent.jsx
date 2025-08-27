import {useState} from "react";

export function ReactHookFormTouchEvent() {
    const [msg, setMsg] = useState("");
    const [styleObj, setStyleObj] = useState({position:"",top:"",left:""});

    function handleTouchMove(e) {
        setStyleObj({
            position: "fixed",
            top:e.touches[0].clientY+"px",
            left:e.touches[0].clientX+"px",
        })
    }
    function getDetails(data,e){
        setMsg(msg);
        console.log(e.touches[0].clientX);
    }

    return (
        <div className="container-fluid">
            <h2>React Hook Form Touch Event</h2>
            <aside style={styleObj} onTouchMove={handleTouchMove} className={"border border-4 border-primary p-2 w-25"}>
                <figure>
                    <img src="https://as1.ftcdn.net/v2/jpg/08/91/44/02/1000_F_891440202_l6yaglmZdkr7nTc4pVLI8uECFZhXKXSc.jpg" alt="" width="600" height={"400"}/>
                    <figcaption>Supreme</figcaption>
                </figure>
            </aside>
            <div className="mt-4">
                <img src="https://as1.ftcdn.net/v2/jpg/09/67/25/88/1000_F_967258873_E4ANCYRi0HenmVl2OTpaDBB8jYHrDLB1.jpg" alt="" onTouchStart={(e)=>getDetails("Bhagvat Geeta - New Branch Starts",e)} width={"400"} height={"200"} className="me-4"/>
                <img src="https://as2.ftcdn.net/v2/jpg/06/35/82/31/1000_F_635823178_zO8K67yoXhWNUtHS0PWTjqsgpgp5kPNQ.jpg" alt="" onTouchStart={(e)=>getDetails("ShreeMad Bhagvatam - New Branch Starts",e)} width={"400"} height={"200"} className="me-4"/>
            </div>
            <h2>{msg}</h2>
        </div>
    )
}