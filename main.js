function count(clear) {
    if(typeof(Storage) !== "undefined" &&  clear == 0) {
        if (sessionStorage.clickcount) {
            sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
        } else {
            sessionStorage.clickcount = 1;
        }
    }
    else if (clear == 1){
        sessionStorage.clickcount = 0;
        document.getElementById("count").innerHTML = 0;
        document.getElementById("price").innerHTML = '$'+ 0;
    }
}
document.getElementById("count").innerHTML = sessionStorage.clickcount;
document.getElementById("price").innerHTML = '$'+ sessionStorage.clickcount * 5;

function myFunction() {
    document.getElementById("demo").innerHTML = "3";
}

