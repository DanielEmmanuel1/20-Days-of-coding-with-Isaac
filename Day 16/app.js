// let sum = 0;
// let i = 1;

// while (i <= 10) {
//   sum += i;
//   i++;
// }

// console.log("The sum is: " + sum);

// for(let i=0; i <= 20; i++){
//     if(i === 1 || i===2 ||i===3 ||i===4 || i===5){
//         continue;
//     } else{
//         console.log(i)
//     }
// }

// let sum = 0;
// let i = 1;

// while (i <= 10) {
// //   sum += i;
//   i++;
// }

// // console.log("The sum is: " + sum);
// console.log(i);

// let minNumb = 1
// let maxNumb = 1000

// console.log(Math.floor((minNumb * maxNumb) * Math.random()));

// let age = prompt("Enter Age: ");
// age.trim()
// age = Number(age);

// if (isNaN(age)) {
//   alert("Age must be numerical");
// } else if (age.length > 3) {
//   alert("Age limit is between 0 - 99");
// } else {
//   alert("Congratulations");
// }

// while (true) {
//   let age = prompt("Enter age");
//   age = age.trim();
//   age = Number(age);

//   if (isNaN(age)) {
//     prompt("Must Enter a Number");
//   } else if (age >= 26) {
//     console.log("Above age limit");
//   } else if (age > 18) {
//     console.log("You are not an adult");
//   } else {
//     console.log("Congratulations");
//     break;
//   }
// }

// while(true){
//   let age = prompt("Enter Age:");
//   age = Number(age)

//   if(isNaN(age)){

//     console.warn("Must be a Number")
//     console.error("Must be a Number")
//   } else {
//     console.log(`You are ${age}`);
//     break;
//   }
// }


let minNumb = 0;
let maxNumb = 9999;

while (true) {
  let guessNumber = prompt("Guess your lucky number: ");

  if (guessNumber === null) {
    console.log("Game canceled by the user.");
    break;
  }
  guessNumber = Number(guessNumber);
  let luckyGuess =
    Math.floor((maxNumb - minNumb + 1) * Math.random()) + minNumb;

  if (isNaN(guessNumber) || guessNumber === "") {
    console.error("Must be a numerical digit");
  } else if (guessNumber === luckyGuess) {
    console.log("BINGO!!!!!!!!!!");
    break;
  } else {
    console.log(`Your number is ${guessNumber}. Try again!`);
  }
}
