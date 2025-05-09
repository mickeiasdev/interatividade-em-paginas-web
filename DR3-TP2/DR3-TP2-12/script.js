// Grupo - Adicionando Itens

// Objetivo: Criar um botão que, ao ser clicado, adicione novos itens
// a uma lista de forma dinâmica.
// Requisitos:
// Crie uma lista de id="lista" no HTML.
// No arquivo script.js:
// Crie um elemento <button> com o texto "Inserir" e atribua uma função
// de clique a ele.
// Adicione o botão ao <body> utilizando append.
// Ao clicar no botão:
// Crie um elemento <li> com o texto "Nova entrada".
// Adicione o <li> criado como filho do elemento <ul> com o id "lista".
// Obs: Não altere o arquivo index.html manualmente. Use apenas o DOM
// para manipulação.

let body = document.body;
let button = document.createElement("button");
button.textContent = "Inserir";
document.body.append(button);

button.addEventListener("click", () => {
  let list = document.getElementById("list");
  let item = document.createElement("li");
  item.innerHTML = "Nova entrada";
  list.appendChild(item);
});
