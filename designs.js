//this is the table
let canvas = document.getElementById('pixelCanvas');
// Select color input
let color = document.getElementById('colorPicker');
// When size is submitted by the user, call makeGrid()
function makeGrid() {
    // Select size input
    let height = document.getElementById('inputHeight');
    let width = document.getElementById('inputWidth');

    for (let r = 0; r < height.value; r++) {
        const row = canvas.insertRow(r);
        for (let c = 0; c < width.value; c++) {
            row.insertCell(c);
        }
    }
    //click on a square to change the color of a particular square
    $('td').on('click', function (event) {             
            color = $("#colorPicker").val();
            if ($(this).attr('style')) {
                $(this).removeAttr('style');
            }
            else {
                $(this).attr('style', 'background-color: ' + color);
            }        
    })
}
//function to clear the table before creating a new one
function clearGrid() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

$('#button').on('click', function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
})
