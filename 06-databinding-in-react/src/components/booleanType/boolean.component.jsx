export default function BooleanComponent(){
    var stock = true;
    return(
        <div>
            <p>Wine stock is availble:- <b>{(stock == true)?"true":"false"}</b></p>
        </div>
    )
}