let genderPick;
let agePick;
let mySpan;

document.getElementById("button").onclick = () => {
  genderPick = document.getElementById("gender").value;
  agePick = document.getElementById("age").value;
  if (genderPick === "male" && agePick === "Less than 25 years") {
    mySpan = document.getElementById("span");
    mySpan.textContent = "You're not eligible for free tickets";
    console.log("You're not eligible for free tickets");

  } else if (genderPick === "male" && agePick === "Older than 25 years") {
    console.log("You're not eligible for free tickets");
    mySpan = document.getElementById("span");
    mySpan.textContent = "You're not eligible for free tickets";


  } else if (genderPick === "female" && agePick === "Less than 25 years") {
    console.log("Congratulations, You're eligible for free tickets");
    mySpan = document.getElementById("span");
    mySpan.textContent = "Congratulations, You're eligible for free tickets";


  } else if(genderPick === "male" && agePick === "Older than 25 years"){
    console.log("You're not eligible for free tickets")
    mySpan = document.getElementById("span");
    mySpan.textContent = "You're not eligible for free tickets";
    


  } else if(genderPick === "female" && agePick === "Older than 25 years"){
    console.log("You're not eligible for free tickets");
    mySpan = document.getElementById("span");
    mySpan.textContent = "You're not eligible for free tickets";
  };
};