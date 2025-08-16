export default function NumberComponent() {
    var price = 56000.00;
    return (
        <div>
            <p>The price of My mind is <b>{price}</b></p>
            <p>The price of My mind is <b>{price.toFixed(2)}</b></p>
            <p>The price of My mind is <b>{price.toLocaleString('en-in',{style:'currency',currency:"INR"})}</b></p>
        </div>
    )
}