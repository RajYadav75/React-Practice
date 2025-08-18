export default function EventBinding(){
    function InsertClick(e){
        console.log(
            `
            Button ID: ${e.target.id}\n
            ClassName: ${e.target.className}\n
            X Position: ${e.clientX}\n
            Y Position: ${e.clientY}\n
            CTRL Key: ${e.ctrlKey}\n
            `
        );
    }
    return (
        <div className={"container-fluid"}>
            <button className="btn btn-primary mt-3" id="btnInsert" onClick={InsertClick}>Insert</button>
        </div>
    )
}