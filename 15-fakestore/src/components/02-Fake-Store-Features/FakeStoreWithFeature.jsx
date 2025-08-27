import {useEffect, useState} from "react";
import axios from "axios";


export function FakeStoreWithFeature() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([{
        id: 0,
        title: "",
        price: 0,
        description: "",
        image: "",
        rating: {rate: 0, count: 0}
    }]);

    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState();
    const [searchString, setSearchString] = useState("");

    function getCartCount() {
        setCartCount(cartItems.length);
    }

    function LoadCategories() {
        axios.get("https://fakestoreapi.com/products/categories")
            .then(res => {
                res.data.unshift("all");
                setCategories(res.data);
            })
    }

    function LoadProducts(url) {
        axios.get(url)
            .then(res => {
                setProducts(res.data);
            })
    }

    useEffect(() => {
        LoadCategories();
        LoadProducts("https://fakestoreapi.com/products");
        getCartCount();
    }, []);

    function handleCategoryChange(event) {
        if (event.target.value === "category") {
            LoadProducts("https://fakestoreapi.com/products");
        } else {
            LoadProducts(`https://fakestoreapi.com/products/category/${event.target.value}`);
        }
    }

    function handleAddToCart(id) {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                cartItems.push(res.data);
                alert(`${res.data.title}\n Added to cart`);
                getCartCount();
            })
    }

    function handleSearchChange(event) {
        setSearchString(event.target.value.toLowerCase());
    }

    function handleSearchClick() {
        LoadProducts(`https://fakestoreapi.com/products/category/${searchString}`);
    }

    function handleRatingChange(event) {
        axios.get(`https://fakestoreapi.com/products`)
            .then(res => {
                let filteredProducts = res.data.filter(item =>
                    item.rating.rate > event.target.value
                );
                console.log(filteredProducts);
            })
    }

    return (
        <div className="container-fluid">
            <header className="d-flex bg-dark text-light fs-5 justify-content-between p-2 border mt-2">
                <div>
                    <span className="fs-4">FakeStore</span>
                </div>
                <div>
                    <div className="input-group">
                        <input type="text" className="form-control" onChange={handleSearchChange} placeholder={"Search by category"} />
                        <button className="btn btn-warning bi bi-search" onClick={handleSearchClick}></button>
                    </div>
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
                    <button data-bs-toggle="modal" data-bs-target="#cart"
                            className="btn btn-light bi bi-cart position-relative">
                        <span className="badge bg-danger rounded-circle position-absolute">{cartCount}</span>
                    </button>
                    <div className="modal fade" id={"cart"}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="text-primary">Your Cart Items</h2>
                                    <button className="btn btn-close" data-bs-dismiss="modal"></button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Title</th>
                                            <th>Preview</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            cartItems.map(cartItem =>
                                                <tr key={cartItem.id}>
                                                    <td>{cartItem.title}</td>
                                                    <td>
                                                        <img src={cartItem.image} width="50" height="50"/>
                                                    </td>
                                                    <td>{cartItem.price}</td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                        <tfoot>
                                        <tr>
                                            <th colSpan={"3"}>Total Amount</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section className="mt-3 row">
                <nav className="col-2">
                    <div>
                        <label className="form-label fw-bold">Select Category</label>
                        <div>
                            <select onChange={handleCategoryChange} className="form-select">
                                {
                                    categories.map(category =>
                                        <option value={category} key={category}>{category.toUpperCase()}</option>
                                    )
                                }
                            </select>
                        </div>
                    </div>
                    <div className="my-3">
                        <label>Rating</label>
                        <div>
                            <div>
                                <input type="checkbox" onChange={handleRatingChange} value={4}/>
                                <span>4 <span className="bi bi-star-fill"></span>Above</span>
                            </div>
                        </div>
                        <div>
                            <input type="checkbox" onChange={handleRatingChange} value={3}/>
                            <span>3 <span className="bi bi-star-fill"></span>Above</span>
                        </div>
                    </div>
                </nav>
                <main className="col-10 d-flex flex-wrap overflow-auto" style={{height: "500px"}}>
                    {
                        products.map(product =>
                            <div className={"card p-2 m-2"} key={product.id} style={{width: "200px"}}>
                                <img src={product.image} height={"120"} className={"card-img-top"}/>
                                <div className="card-header text-truncate"
                                     style={{
                                         height: "60px",
                                         whiteSpace: "nowrap",
                                         overflow: "hidden",
                                         textOverflow: "ellipsis"
                                     }}>
                                    {product.title}
                                </div>
                                <div className="card-body">
                                    <dl>
                                        <dt>Price</dt>
                                        <dd>{product.price}</dd>
                                        <dt>Rating</dt>
                                        <dd>{product.rating.rate} <span className="bi bi-star-fill text-success"></span>
                                        </dd>
                                    </dl>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-warning w-100"
                                            onClick={() => handleAddToCart(product.id)}>
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