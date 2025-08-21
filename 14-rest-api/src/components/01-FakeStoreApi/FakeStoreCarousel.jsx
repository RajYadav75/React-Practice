import {useEffect, useRef, useState} from "react";
import axios from "axios";

export function FakeStoreCarousel() {
    const [product, setProduct] = useState({id:0,title:"",price:0,category:"",description:"",image:"",rating:{rate:0,count:0}});
    const [status, setStatus] = useState("Manual");
    let count = useRef(1);
    let thread = useRef(null);

    function LoadProduct(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                setProduct(res.data);
            })
    }

    function LoadProductAuto(){
        count.current = count.current + 1;
        axios.get(`https://fakestoreapi.com/products/${count.current}`)
            .then(res => {
                setProduct(res.data);
            })
    }

    useEffect(() => {
        LoadProduct(1);
    }, []);

    function handleNextClick() {
        count.current = count.current + 1;
        LoadProduct(count.current);
    }

    function handlePreviousClick() {
        count.current = count.current - 1;
        LoadProduct(count.current);
    }

    function handlePlayClick() {
        thread.current = setInterval(LoadProductAuto, 5000);
        setStatus("Slide Show Running");
    }

    function handlePauseClick() {
        clearInterval(thread.current);
        setStatus("Slide Show Paused");
    }

    function handleSliderChange(event) {
        count.current = event.target.value;
        LoadProduct(count.current);
    }
    return (
        <div className="container-fluid">
            <div className="d-flex justify-content-center">
                <div className="card p-2 mt-4 w-50">
                    <div className="card-header text-center">
                        {product.title}
                        <div className="fw-bold">
                            {status}
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button className="bi bi-chevron-left btn btn-dark" onClick={handlePreviousClick}></button>
                            </div>
                            <div className="col-10 position-relative">
                                <div className="position-absolute p-3 badge bg-danger rounded rounded-circle end-0 top-0">
                                    {product.price.toLocaleString("en-in",{style:"currency", currency:"INR"})}
                                </div>
                                <img src={product.image} alt="" width="100%" height="350" />
                                <div className="my-2">
                                    <input type="range" className="form-range" onChange={handleSliderChange} min="1" max="20" value={count.current}/>
                                </div>
                            </div>
                            <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                                <button className="bi bi-chevron-right btn btn-dark"></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer text-center">
                        <button className="bi bi-play btn btn-primary mx-2" onClick={handlePlayClick}></button>
                        <button className="bi bi-pause btn btn-danger mx-2" onClick={handlePauseClick}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}