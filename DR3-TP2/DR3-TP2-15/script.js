// Objetivo: Adicionar estilos condicionais às linhas de uma tabela
// com base no valor de uma classe.
// Requisitos:
// Recrie a tabela abaixo no HTML:
// No script.js:
// Adicione um evento de clique ao botão dentro da tag <td>.
// Ao clicar no botão, uma função deve verificar:
// Se o valor da coluna "nota" da linha do botão clicado for maior ou igual a 5,
// adicione uma classe que deixe a cor de fundo da <tr>verde.
// Se o valor da coluna "nota" da linha do botão clicado for menor que 5, adicione
// uma classe que deixe a cor de fundo da <tr>vermelha.
// Obs: Não altere o arquivo index.html manualmente. Utilize apenas o DOM para
// manipulação.

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const row = button.closest("tr");
    const number = parseInt(row.querySelector(".number").textContent);

    if (number >= 5) {
      row.classList.add("green");
      row.classList.remove("red");
    } else {
      row.classList.remove("green");
      row.classList.add("red");
    }
  });
});
