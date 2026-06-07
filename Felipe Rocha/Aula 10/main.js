// Selecionar um elemento:
// const adicionarUser = window.document.getElementBy("adicionar-user");
// const adicionarUser = window.document.querySelector(".container #my-form");

// Selecionar multiplos elementos:
// const varios = document.querySelectorAll(".item")
// const all = document.getElementsByClassName("item")
// const all = document.getElementByTagName("li")

// Manipulando elementos:
// const items = document.querySelector(".items");
// const button = document.querySelector(".btn");
// items.remove();
// items.firstElementChild.remove();
// items.lastElementChild.remove();
// items.children[1].textContent = "item Um";
// items.lastElementChild.innerHTML = "<h1> Hello </h1>";
// button.style.background = "red";
// button.style.color = "blue";

// Eventos:
const button = document.querySelector(".btn");
const name = document.querySelector("#name");
const email = document.querySelector("#email");

button.addEventListener("click", (e) => {
  e.preventDefault();
});
