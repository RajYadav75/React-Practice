export function CustomEvent() {
    function InsertClick(name,price,cities,event){
        console.log(`
            Name:${name}\n price:${price}\n cities:${cities}\n ButtonId:${event.target.id}\n Class:${event.target.className} 
        `);
    }
    return (
        <div className="container-fluid">
            <button className="btn btn-primary mt-3" id="btnInsert" onClick={(e)=> InsertClick("TV",34000,["Gorakhpur","Prayagraj"],e)}>Insert</button>
        </div>
    )
}