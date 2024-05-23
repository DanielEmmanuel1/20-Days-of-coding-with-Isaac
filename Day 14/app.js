// let day = 1;

// switch (day) {
//   case 1:
//     console.log("The first day of the week is Monday");
//     break;
//   case 2:
//     console.log("The second day of the week is Tuesday");
//     break;
//   case 3:
//     console.log("The third day of the week is Wednesday");
//     break;
//   case 4:
//     console.log("The fourth day of the week is Thursday");
//     break;
//   case 5:
//     console.log("The fifth day of the week is Friday");
//     break;
//   case 6:
//     console.log("The sixth day of the week is Monday");
//     break;
//   case 7:
//     console.log("The seventh day of the week is Monday");
//     break;

//   default:
//     console.log("This isn't a day in the week");
// }

let testScore = 400;
let Grade;

switch (true) {
  case testScore >= 80:
    Grade = "A";
    break;

  case testScore >= 70:
    Grade = "B";
    break;

  case testScore >= 60:
    Grade = "C";
    break;

  case testScore >= 50:
    Grade = "D";
    break;

  case testScore <= 50:
    Grade = "E";
    break;

  case testScore <= 40:
    Grade = "F";
    break;

  case testScore > 100:
    Grade = "You have no test score";
    break;
}

console.log(Grade);
