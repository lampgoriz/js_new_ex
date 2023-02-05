function getRandom (min, max){
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let randomNumber = getRandom(1, 60000);


console.log(randomNumber);
let color = randomNumber.toString(16);
console.log(color);

let elementColor = document.getElementById("body");

console.log(elementColor);
elementColor.style.backgroundColor = "#" + color;

function mouseMove (event) {
    console.log(this.className)
    console.log(event)
}

elementColor.addEventListener("mousemove", mouseMove);

let arr = ["meme","keke", "lolo"];
let newArr = arr;
newArr.push("nini");
console.log(arr.length);


