// Write your code here!
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // 1) Remove the 'main#main' node
  const mainElement = document.getElementById("main");
  mainElement.remove();
  // // Wait for the DOM to be fully loaded
  // document.addEventListener("DOMContentLoaded", function () {
  //     // 1) Remove the 'main#main' node
  //     const mainElement = document.getElementById("main");
  //     mainElement.remove();

  // 2) Create a new 'h1' element with the id 'victory'
  const newHeader = document.createElement("h1");
  newHeader.id = "victory";
  //     // 2) Create a new 'h1' element with the id 'victory'
  //     const newHeader = document.createElement("h1");
  //     newHeader.id = "victory";

  // 3) Set the 'newHeader' variable to point to the 'h1#victory' node
  const victoryHeader = document.getElementById("victory");
  const body = document.querySelector("body");
  //     // 3) Set the 'newHeader' variable to point to the 'h1#victory' node
  //     const victoryHeader = document.getElementById("victory");
  //     const body = document.querySelector("body");

  // 4) Update the 'h1#victory' node with the desired text
  newHeader.textContent = "Elfas is the Champion";
  //     // 4) Update the 'h1#victory' node with the desired text
  //     newHeader.textContent = "Elfas is the champion";

  // Append the updated 'h1' to the body
  body.appendChild(newHeader);
});
// Append the updated 'h1' to the body
//     body.appendChild(newHeader);
//   });

const element = document.getElementById("main");
element.remove(main);
console.log();

// new h1 element
const newHeader = document.createElement("h1");
newHeader.textContent = "victory";
newHeader.id = "victory";

// Append the new h1
document.body.appendChild(newHeader);

if (newHeader) {
  newHeader.textContent = "Elfas is the champion";
} else;
("enter a valid name");
