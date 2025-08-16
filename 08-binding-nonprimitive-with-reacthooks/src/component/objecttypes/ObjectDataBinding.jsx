import {useEffect, useState} from "react";

export default function ObjectDataBindingUsingXMLHTTPReq() {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        rating: {rate: 0, reviews: 0, ratings: 0},
        offers: [],
        image: ""
    });


    function LoadData() {
        var http = new XMLHttpRequest();
        http.open("GET", "product.json", true);
        http.send();
        http.onreadystatechange = function () {
            if (http.readyState === 4) {
                setProduct(JSON.parse(http.responseText));
            }
        }
    }

    useEffect(() => {
        LoadData();
    }, []);
    return (
        <div className="container-fluid">
            <div className="row mt-4">
                <div className="col-3">
                    <img src={product.image} alt="iphone" width="100%"/>
                </div>
                <div className="col-9">
                    <div className="h4">{product.title}</div>
                    <div className="mt-3">
                        <div className="badge bg-success rounded">
                            {product.rating.rate} <span className="bi bi-star-fill"></span>
                        </div>
                        <span className="fw-bold text-secondary">
                            {product.rating.ratings.toLocaleString()}ratings & {product.rating.reviews.toLocaleString()}reviews
                        </span>
                    </div>
                    <div className="mt-4 h3">
                        {product.price.toLocaleString("en-in", {style: "currency", currency: "INR"})}
                    </div>
                </div>
                <ul className="list-unstyled">
                    {
                        product.offers.map(offer => <li className="bi bi-tag-fill text-success my-3" key={offer}>
                            <span className="text-secondary">{offer}</span>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}