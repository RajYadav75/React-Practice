import {useEffect, useState} from "react";
import axios from "axios";
import "./mouse.css"

export function PhoneMouseEventStyle() {
    const [mobiles, setMobiles] = useState([{image_url:""}]);
    const [preview, setPreview] = useState();

    useEffect(() => {
        axios.get("phone.json")
            .then(res => {
                setMobiles(res.data);
                if (res.data.length > 0) {
                    setPreview(res.data[0].image_url);
                }
            })
    }, []);

    function handleMouseOver(e) {
        setPreview(e.target.src);
    }
    return (
        <div className={"container-fluid"}>
            <div className={"mt-4 row"}>
                <nav className={"col-2"}>
                    {
                        mobiles.map(mobile =>
                            <div className={"thumbnail my-4"} style={{width:'75px'}} key={mobile.image_url}>
                                <img src={mobile.image_url} alt="" width={"70px"} height={"70px"} onMouseOver={handleMouseOver} />
                            </div>
                        )
                    }
                </nav>
                <main className={"col-10"} >
                    <img src={preview} alt="" width={"35%"} height={"400"} />
                </main>
            </div>
        </div>
    )
}