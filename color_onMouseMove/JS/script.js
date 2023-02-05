// get HTML elements
const body = document.querySelector('#body'); // get body element
const toggleButton = document.querySelector('.modal-toggle'); // get toggle button for a form
const form = document.querySelector('.modal'); // get form element
const submitButton = document.querySelector('#modal_button'); // get the button to submit form
let inputText = document.querySelector('#modal_input'); // get form input

// declare variables
let deg = 20; // default deg for gradient

// sign listeners
body.addEventListener("mousemove", changeColor); // listener to change colour on mouse move in the body element
// submitButton.addEventListener('click', changeDeg); // listener on click in the form element to submit new deg
submitButton.addEventListener('click', ()=>{
    if(inputText.value != "") {
        deg = inputText.value
    }
    event.preventDefault();
    inputText.value = "";
}); // listener on click in the form element to submit new deg
// form.addEventListener('submit', changeDeg);
toggleButton.addEventListener('click', ()=>{ // listener that show or hide form on button click
    toggleButton.classList.toggle("modal-toggle-active");
    form.classList.toggle("modal-inactive");
});
// inputText.addEventListener('keydown', ()=>{if(KeyboardEvent.code == 13){changeDeg()}});


// functions
/* A function that accepts current event
get user window size based on the event
and change the background gradient colour*/
function changeColor(event) {
    let x = event.clientX; // horizontal coordinate of cursor on window
    let y = event.clientY; // vertical coordinate of cursor on window
    // body.style.cssText = `background: rgb(${getColor(x, "x")}, ${getColor(y,"y")}, ${squareRoot(getColor(x,"x")) + squareRoot(getColor(y, "y"))});`;
    body.style.cssText = `background: linear-gradient( 
    ${deg + "deg"},
    rgb(
    ${getColor(x, "x")}, 
    ${getColor(y,"y")}, 
    ${getSquareRoot(getColor(x,"x")) + getSquareRoot(getColor(y, "y"))}
    ),
    rgb(
    ${255 - getColor(x, "x")}, 
    ${255 - getColor(y,"y")}, 
    ${255 - getColor(x,"x") + (255 - getColor(y, "y"))}
    )
    );`;
}

/* A function that accepts as params cursor coordinates and axis
based on the axis we drop into one of the branches
where we get the horizontal or vertical size of the window
then calculate the step that gives us 255 equal parts of the screen which contained numbers from 0 to 255
these numbers will be put on RGB() to create colour depending on cursor coordinates
*/
function getColor(coord, axis) {
    if(axis == "x"){
        let screenWidth = document.documentElement.clientWidth;
        let stepX = Math.floor(screenWidth / 255);
        return Math.floor(coord / stepX)
    }else if(axis == "y"){
        let screenHeight = document.documentElement.clientHeight;
        let stepY = Math.floor(screenHeight / 255);
        return Math.floor(coord / stepY)
    }
}


/* A function that accepts as params some value and gets the square root of it*/
function getSquareRoot (value){
    return  Math.sqrt(value);
}

/* A function that changes deg of the gradient by the value from input form on button click
* and fills input form with emptiness*/
function changeDeg() {
    if(inputText.value != "") {
        deg = inputText.value
    }
    inputText.value = "";
}