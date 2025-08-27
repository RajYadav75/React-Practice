import {useEffect, useState} from "react";
import axios from "axios";

export function FakeStore() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{
        id:0,
        title:"",
        price:0,
        description:"",
        image:"",
        rating:{rate:0,count:0}
    }]);

    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
        .then(res => {
            res.data.unshift("all");
            setCategories(res.data);
        })
    }

    function LoadProducts() {
        axios.get("https://fakestoreapi.com/products")
        .then(res => {
            setProducts(res.data);
        })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts();
    }, []);
    return (
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-5 justify-content-between p-2 border mt-2">
                <div>
                    <span className="fs-4">FakeStore</span>
                </div>
                <nav>
                    <span>Electronics</span>
                    <span className="mx-2">Men's Clothing</span>
                    <span>Women Fashion</span>
                    <span className="ms-2">Jewelery</span>
                </nav>
                <div>
                    <button className="btn btn-light">
                        <span className="bi bi-person"></span>
                    </button>
                    <button className="btn btn-light mx-2">
                        <span className="bi bi-heart"></span>
                    </button>
                    <button className="btn btn-light">
                        <span className="bi bi-cart"></span>
                    </button>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select name="" id="" className="form-select">
                                {
                                    categories.map(category =>
                                        <option value={category} key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height:"500px"}}>
                    {
                        products.map(product =>
                            <div className={"card p-2 m-2"} key={product.id}>
                                <img src={product.image}  height={"120"} className={"card-img-top"} />
                                <div className="card-header" style={{height:'100px'}}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span></dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100">
                                        <span className="bi bi-cart4">Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </main>
            </section>
        </div>
    )
}