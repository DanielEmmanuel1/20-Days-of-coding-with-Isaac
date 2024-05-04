// let fullName = `Daniel Emmanuel`;
// let myAge = 25;
// let isStudent = false;

// document.getElementById('p1').textContent = `My name is ${fullName}`;
// document.getElementById('p2').textContent = `I am ${myAge} years of age`;
// document.getElementById('p3').textContent = `Enrolled: ${isStudent}`;

let myAge ;

let introduction = prompt("What is your name");
document.getElementById("p1").textContent = `Welcome ${introduction}`;

document.getElementById("submit").onclick = () => {
    myAge = document.getElementById("myText").value;

  document.getElementById("ageNumber").textContent = `Your age is ${myAge}`;
  myAge = Number();
  console.log(typeof myAge)
};
