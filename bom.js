//let stopitnow = document.querySelector("button");
// stopitnow.addEventListener("click", () => {
//   clearTimeout(handler);
//   console.log("the counter has been Stopped");
// });
// const SayName = (name) => {
//   console.log(`hey Brother! How are you ${name}`);
// };
// let handler = setTimeout(SayName, 5000, "Monssef HOUTI");
let div = document.querySelector("div");
let buttonScroll = document.querySelector("button");
// const countdown = () => {
//   div.innerHTML -= 1;
//   if (div.innerHTML === "0") {
//     div.innerHTML = "Finished successfully";
//     clearInterval(counter);
//   }
// };
// let counter = setInterval(countdown, 1000);
window.onscroll = function () {
  if (window.scrollY >= 600) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
};
buttonScroll.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
