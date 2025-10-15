function darkMode(){
    let page = document.body
    let bg = window.getComputedStyle(page).backgroundColor
    if(bg == "rgb(0, 0, 0)"){
        page.style.backgroundColor = "white"
        page.style.color = "black"
    } else{
        page.style.backgroundColor = "black"
        page.style.color = "white"
    }
}

let isBlue = true;

function changeColor() {
    const box = document.getElementById("colorBox");

    if (isBlue) {
        box.style.backgroundColor = "black";
    } else {
        box.style.backgroundColor = "blue";
    }

    isBlue = !isBlue; // Toggle state
}
