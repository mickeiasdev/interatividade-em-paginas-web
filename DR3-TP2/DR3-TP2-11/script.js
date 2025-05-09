// Formulário Interativo

// Objetivo: Exibir o texto digitado em um campo de entrada.
// Requisitos:
// Crie um campo de texto (input type="text") e um botão de envio.
// O texto digitado deve ser exibido abaixo do formulário:
// Com o clique no botão de envio.
// Ou ao pressionar uma tecla específica (à sua escolha).

let input = document.getElementById("input");
let button = document.getElementById("button");
let list = document.getElementById("list");

button.addEventListener("click", () => {
  let value = input.value;
  if (value.trim() !== "") {
    list.innerHTML += `<p>${value}</p>`;
    input.value = "";
  } else {
    alert("Voce deve digitar a tarefa antes de clicar em adicionar.");
  }
});
