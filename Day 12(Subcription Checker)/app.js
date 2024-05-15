let myCheckBox = document.getElementById("myCheckBox");
let visaBtn = document.getElementById("visaBtn");
let masterBtn = document.getElementById("masterBtn");
let paypalBtn = document.getElementById("paypalBtn");
let submitBtn = document.getElementById("submitBtn");
let submitResult = document.getElementById("submitResult");

submitBtn.onclick = () => {
  if (myCheckBox.checked && visaBtn.checked && masterBtn.checked && paypalBtn.checked){
    submitResult.textContent = "You must select only the subscribe button and ONLY one method of payment";;
  } else if (myCheckBox.checked && visaBtn.checked && masterBtn.checked) {
    submitResult.textContent =
      "You can only choose one payment method";
  } else if (myCheckBox.checked && visaBtn.checked && paypalBtn.checked) {
    submitResult.textContent =
      "You can only choose one payment method";
  } else if (myCheckBox.checked && masterBtn.checked && visaBtn.checked) {
    submitResult.textContent =
      "You can only choose one payment method";
  } else if (myCheckBox.checked && masterBtn.checked && paypalBtn.checked) {
    submitResult.textContent =
      "You can only choose one payment method";
  } else if (myCheckBox.checked && masterBtn.checked) {
    submitResult.textContent =
      "Congratulations, You subscribed using you Master Card";
  } else if (myCheckBox.checked && visaBtn.checked) {
    submitResult.textContent =
      "Congratulations, You subscribed using you Visa Card";
  } else if (myCheckBox.checked && paypalBtn.checked) {
    submitResult.textContent =
      "Congratulations, You subscribed using you Palpal Card";
  } else {
    submitResult.textContent = "You're not subscribed";
  }
};
