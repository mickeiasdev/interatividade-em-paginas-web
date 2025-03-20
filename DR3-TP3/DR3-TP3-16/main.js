// No arquivo script.js, siga as etapas abaixo:

// Adicione um event listener de click, no elemento <ul id=“lista”>
// Ao clicar neste elemento <ul>, mude:
// O conteúdo do elemento <li> de texto Acre, para o texto Amapá.
// Sua cor de fundo para azul.
// Link: https://codesandbox.io/p/sandbox/v2g6jr
// Observações:

// Não faça as alterações manualmente no arquivo index.html.
// Utilize o DOM para resolver o exercício.
// Utilize o “innerText”, para alterar o `conteúdo` do elemento <span>.

const lista = document.getElementById("lista");

lista.addEventListener("click", () => {
  const lis = document.querySelectorAll("li");
  lis.forEach((li) => {
    if (li.innerText === "Acre") {
      li.innerText = "Amapá";
      li.style.backgroundColor = "blue";
      li.style.color = "white";
    }
  });
});
