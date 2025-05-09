// Grupo - Modal

// Objetivo: Implementar um modal que pode ser exibido e ocultado com interações via DOM.
// Requisitos:
// Crie uma div de id "modal" com um elemento h3 de conteúdo "Modal" e uma imagem de id "close".
// No script.js, adicione a classe hide ao elemento <div> com o id "modal".
// No arquivo style.css, defina a classe hide para que a div se torne invisível.
// Ao clicar no botão (<button>), chame uma função que mostre o modal.

// Ao clicar na imagem com id "close" dentro da modal, oculte o modal novamente.
// Obs: Toda manipulação deve ser feita com o DOM.
const modal = document.getElementById("modal");
modal.classList.add("hide");
const img = document.getElementById("close");
const button = document.createElement("button");
button.textContent = "Habilitar Modal";
document.body.append(button);

button.addEventListener("click", () => {
  modal.classList.remove("hide");
  button.classList.add("hide");
});

img.addEventListener("click", () => {
  modal.classList.add("hide");
  button.classList.remove("hide");
});
