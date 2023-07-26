let i;
for (i = 0; i < 1; i++) {
  let mainDiv = document.createElement("div");
  mainDiv.className = "products";

  let heading = document.createElement("h3");
  let headingText = document.createTextNode(`this is a new Product${[i + 1]}`);

  let newPar = document.createElement("p");
  let newParText = document.createTextNode(
    `New Text in the Paragraph${[i + 1]}`
  );
  newPar.appendChild(newParText);
  heading.appendChild(headingText);
  mainDiv.appendChild(heading);
  mainDiv.appendChild(newPar);
  // Append the Main Div to the body

  document.body.append(mainDiv);

  console.log(mainDiv.children); // the children are "h3" and "p"
  console.log(mainDiv.children[0]); // the child is "h3"
  console.log(mainDiv.childNodes); // the children are "h3" and "p"
  console.log(mainDiv.childNodes[1]); // the children are "h3" and "p"
}
