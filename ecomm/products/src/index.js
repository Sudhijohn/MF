import faker from "faker";
// const faker = require("faker");

let products = "";

for (let index = 0; index < 5; index++) {
  const name = faker.commerce.productName();
  products += `<div>${name}</div>`;
}

const productDiv = document.querySelector("#dev-products");
productDiv.insertAdjacentHTML("beforeend", products);

console.log(products);
