// Criação de elementos no DOM

// No HTML crie um elemento “div” de id “container” e um elemento “button” com texto “inserir”
// que ao ser clicado, criará um elemento “h2” com texto “Titulo inserido” e o adicionará
// ao elemento “div” de id “container”.

const container = document.getElementById("container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const h2 = document.createElement("h2")
  h2.textContent = "Titulo Inserido"
  container.appendChild(h2)
});