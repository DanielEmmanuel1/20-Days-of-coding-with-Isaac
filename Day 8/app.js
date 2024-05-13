let pi = 3.14;
let radius;
let circumference;
let submitButton;
let displayResult;


submitButton = document.getElementById("Submit").onclick = () => {
    radius = document.getElementById("radius").value
    circumference = radius * pi;
    console.log(circumference)
    displayResult = document.getElementById("display").textContent = `Your result is ${circumference}`
};
