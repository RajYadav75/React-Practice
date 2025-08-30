import React, { useReducer } from 'react'
let initialState = {wishList:0};
function reducer(state,action){
    switch (action.type) {
        case "addToWishList":
            return {wishList:state.wishList+1};
        case "removeFromWishList":
            return {wishList:state.wishList-1};
    }
}

export default function ReducerDemo() {
    const [state, dispatch] = useReducer(reducer,initialState);
    function handleWishListClick(){
        dispatch({type:"addToWishList"});
    }
    function handleRemoveWishList(){
        dispatch({type:"removeFromWishList"})
    }
    
  return (
    <div>
        <h3>Shopping</h3>
        <button className="btn btn-warning bi bi-heart" style={{position:"fixed",top:"50px",right:"50px"}}>
            <span className='badge bg-danger position-absolute rounded rounded-circle'>{state.wishList}</span>
        </button>
        <div className="card" style={{width:"250px"}}>
            <img src="https://m.media-amazon.com/images/I/41iLfwTLvxL._AC_SY350_QL15_.jpg" alt="photo" className='card-img-top' height={"200px"} />
            <div className="card-header">
                <div>Shree Hari Krishna</div>
            </div>
            <div className="card-footer">
                <button className="btn btn-success bi bi-heart" onClick={handleWishListClick}></button>
                <button className="btn btn-warning bi bi-cart4 ms-2"></button>
                <button className='btn btn-danger bi ms-2 bi-trash' onClick={handleRemoveWishList}>WishList</button>
            </div>
        </div>
    </div>
  )
}
