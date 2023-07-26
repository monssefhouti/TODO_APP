let myform = document.getElementById("form");
let nameInput = document.querySelector("[name='name']"); //with queryselector
let ageInput = document.querySelector("[name='age']"); //with queryselector
let googlelink = document.links[0];
myform.onsubmit = (e) => {
  let userValid = false;
  let ageValid = false;
  if (nameInput !== "" && nameInput.value.length > 10) {
    // alert("the name must be at most 10 characters");
    console.log("not valid");
    userValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

googlelink.style.cssText = "text-decoration:none;color:red;"; // add multiple styles at once

googlelink.style.removeProperty("color");
googlelink.style.setProperty("font-size", "26px");
