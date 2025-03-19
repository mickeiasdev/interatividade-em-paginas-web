// Exibição de Valor ao Perder Foco no Campo de Texto

// Crie no arquivo HTML um formulário e nele um campo de texto.
// Quando o campo de entrada perder o foco, exiba o valor digitado
// em um parágrafo abaixo do campo de texto.

const campo = document.getElementById("name");
const msg = document.getElementById("msg");

campo.addEventListener("focusout", () => {
  msg.innerHTML = `Você escreveu a palavra: ${campo.value}`;
});
