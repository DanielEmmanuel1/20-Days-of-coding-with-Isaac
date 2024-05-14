let increase;
let decrease;
let reset
let countDisplay;
let counter = 0;

document.getElementById("increase").onclick = () => {
  countDisplay = document.getElementById("counter").textContent = ++counter;
  console.log(countDisplay);
};

document.getElementById("decrease").onclick = () => {
  document.getElementById("counter").textContent = --counter;
};

document.getElementById("reset").onclick = () => {
  document.getElementById("counter").textContent = 0;
};
