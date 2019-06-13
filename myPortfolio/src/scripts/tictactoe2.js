var xturn=true;
function placeMarker(id){
    var square=document.getElementById(id);
    if (xturn) {
        square.innerHTML="x";
    }
    else {
        square.innerHTML="o";
    }
    xturn=!xturn;
}

console.log("bob");