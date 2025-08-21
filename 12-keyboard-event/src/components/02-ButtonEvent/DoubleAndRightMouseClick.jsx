export function DoubleAndRightMouseClick() {
    function handleDoubleClick() {
        window.open("iphone.jpg","Iphone","width=400 height=600");
    }
    function handleRightClick() {
        alert("Right click no allowed in this page");
        document.oncontextmenu = function (){
            return false;
        }
    }
    return (
        <div className="container-fluid" onContextMenu={handleRightClick}>
            <img src="ironman.png" width="100" height="100" onDoubleClick={handleDoubleClick} alt=""/>
            <p>Double Click to view Large</p>
        </div>
    )
}