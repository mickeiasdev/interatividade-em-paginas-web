// Manipulação de texto

// Crie no HTML um elemento “span” de id=”texto” contendo o texto “Fulano”
// e um elemento “input” de id=”nome”. Crie também um botão que ao ser clicado
// pegue o texto digitado pelo usuário no input e substitua o conteúdo do elemento “span” com este texto.

const texto = document.getElementById("texto");
const nome = document.getElementById("nome");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  texto.innerHTML = nome.value
  nome.value = ""
});