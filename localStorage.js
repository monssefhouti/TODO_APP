let Lists = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");

if (localStorage.getItem("color")) {
  // if there a color in the LocalStorage

  // [1] - Add Color to Div
  exp.style.backgroundColor = localStorage.getItem("color");

  // [2] - Remove Active ClassList from All
  Lists.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] - Add Active ClassList from currentColor
  document
    .querySelector(`[data-color ="${localStorage.getItem("color")}"]`)
    .classList.add("active");
}

Lists.forEach((li) => {
  li.addEventListener("click", (e) => {
    //Remove Active ClassList from All
    Lists.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active ClassList to the CurrentTarget
    e.currentTarget.classList.add("active");

    // Add Current Color to LocalStorage
    localStorage.setItem("color", e.currentTarget.dataset.color);

    // Change Div BackgroundColor
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
