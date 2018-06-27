// Select size input
let height = document.getElementById("inputHeight");
let width = document.getElementById("inputWidth");
// Select color input
let color = document.getElementById("colorPicker");
//this is the table
let canvas = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
function makeGrid() {
    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            row.insertCell(c);
        }
    }
    // click on a square to change the color of a particular square
    $("table").on("click", function () {
        $(event.target).css("background-color", color.value);
    })
}
//function to clear the table before creating a new one
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

$("#button").on("click", function (event) {
    event.preventDefault();
    clearGrid();
    //debugging. Check if inputs are being captured correctly
    console.log("button clicked");
    console.log(height.value);
    console.log(width.value);
    console.log(color.value);
    makeGrid();
})
