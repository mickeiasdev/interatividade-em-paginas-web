// No arquivo script.js, siga as etapas abaixo:

// Adicione um event listener de click, ao elemento <div id=“container”>
// Ao clicar neste elemento “<div>”, o conteúdo do elemento “<span>”, filho do elemento clicado, irá se tornar a palavra ”teste”.
// Link: https://codesandbox.io/p/sandbox/cgq4jq
// Observações:

// Não faça as alterações manualmente no arquivo index.html.
// Utilize o DOM para resolver o exercício.
// Utilize o `textContent`, para alterar o `conteúdo` do elemento <span>.

const container = document.getElementById("container");
const span = document.querySelector("span");

container.addEventListener("click", () => {
  span.innerHTML = "Teste";
});
