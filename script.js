
const gridNum = document.querySelector("#grid-num");
const eraser = document.querySelector("#eraser");
const reset = document.querySelector("#reset");
const main = document.querySelector(".main");
const black = document.querySelector("#black");
const rainbow = document.querySelector("#rainbow");
const darken = document.querySelector("#darken");



gridNum.addEventListener("click", () => {
    main.innerHTML = "";
    const gridNumInput = +prompt("How many numbers of grid per side do you want? select between 1 and 100", "");
    if (gridNumInput < 0 || gridNumInput >100){
        alert("invalid input");
        gridNumInput = false;
    }

    for (let i = 0; i < gridNumInput; i++){
        const box = document.createElement("div");
        main.appendChild(box);

        for (j = 0; j < gridNumInput; j++){
        const subBox = document.createElement("div");
        box.appendChild(subBox);
        subBox.addEventListener("mouseover", () => {
            subBox.style.backgroundColor = "#000";
        })

        eraser.addEventListener("click", () => {
            subBox.onmouseover = function () {
                subBox.style.backgroundColor = "#fff";}
        })

        reset.addEventListener("click", () => {
                subBox.style.backgroundColor = "#fff";
        })

        black.addEventListener("click", () => {
            subBox.onmouseover = function () {
                subBox.style.backgroundColor = "#000";}
        })

        red.addEventListener("click", () => {
            subBox.onmouseover = function () {
                subBox.style.backgroundColor = "#e93e3e";}
        })

        rainbow.addEventListener("click", () => {
         
            subBox.onmouseover = function () {
                const r = Math.trunc(Math.random() * 256);
                const g = Math.trunc(Math.random() * 256);
                const b = Math.trunc(Math.random() * 256);
                subBox.style.backgroundColor = `rgb(${r}, ${g}, ${b}, 90%)`;}
        })

        let a = 100;

        darken.addEventListener("click", () => {
            subBox.onmouseover = function () {
                if (a > 10){
                a -= 10;}
                subBox.style.backgroundColor = `rgb(0, 0, 0, ${a}%)`;
            // alert(a)
        }
        })


        }
       }

       
})




