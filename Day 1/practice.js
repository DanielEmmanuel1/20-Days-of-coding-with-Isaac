// ADDITION ASSIGNMENT
// EXAMPLE 1
let x = 10
x += 20
console.log(x)

// EXAMPLE 2
let z = 20
z += 80
console.log(z)


// IF AND ELSE STATEMENTS
let x = 9
if (x > 10){
  console.log('X is greater than 10')
}else{
  console.log('X is lesser than 10')
}

// SWITCH STATEMENTS
// EXAMPLE 1
let footballerName = "Suarez";

switch (footballerName) {
  case "Ronaldo":
    console.log("Correct, this is the player");
    break;

  case "Ballotelli":
    console.log("This is Ballotelli");
    break;

  case "Neymar Jnr":
    console.log("I'm Neyar ffrom Brazil");
    break;

  case "MacAllister":
    console.log("I'm liverpool's best player currently");

  default:
    console.log("Not a players");
}
// EXAMPLE 2
let fruits = "Apples";

switch (fruits) {
  case "Mangos":
    console.log("Mangoes are yellow");
    break;

  case "Oranges":
    console.log("Oranges are orange");
    break;

  case "Strawberry":
    console.log("Strawberries are red");

  default:
    console.log("Its just not a fruit");
}

// FUNCTIONS
// EXAMPLE 1
let title = "Mr";
let name = "Deon"

function myName(title, name){
  return title + " " + name
}
console.log(myName("Mr", "Deon"))


let title = "Mr";
let name = "Deon";

function myName(){
  return title + " " + name
}
console.log(myName())