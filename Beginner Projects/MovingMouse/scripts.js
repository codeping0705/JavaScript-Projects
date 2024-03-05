let div = document.getElementById("main");

document.addEventListener("mousemove",(e) => {
    move(e);
})

const move =(e) => {
    var x =e.pageX;
    var y=e.pageY;

    div.style.left = x-50 +"px";
    div.style.top = y-50 +"px";

}