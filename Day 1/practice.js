//Example1

// let count = 20;

// for(i=0; i<count; count--){
//     console.log(count)
// }

// Example 2

// let cityNames = ['Lagos', 'Port-Harcort', 'Enugu', 'Festac'];
// console.log(cityNames);

// cityNames.push('Ikorodu', 'ojuelegba', 'mowe')
// console.log(cityNames);

// cityNames.pop();
// console.log(cityNames)

// let stringName = "";
// console.log(stringName);

//Example 3
// const myArray = ['apple', 'banana', 'orange', 'grape'];
// for (const fruit of myArray) {
//     console.log(fruit);
// }

// const states = ['Lagos', 'Enugu', 'Jos', 'Uyo'];

// for(const places of states) {
//     console.log(places)
// }

// let age = 10;

// age = age + 10;

// console.log(age)

// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(i);
// }

// let result = "";
// for (const row of rows) {
//   result = result + row;
//   console.log(result)
// }

// let praize = "Deon is a genius";
// praize = praize.repeat(4);
// console.log(praize)

// for (const names of praize){
//     console.log(names)
// }

//Example 4
// const character = "#";
// const count = 8;
// const rows = [];

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character);
// }

// let result = "";

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

//Example 5
// const character = "#";
// const count = 8;
// const rows = [];
// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character.repeat(i));
// }

// let result = "";

// for (const row of rows) {
//   result = result + "\n" + row;
// }

// console.log(result);

//Example 6
function padRow() {
    return "I am King";
}

const call = padRow();

console.log(call);
