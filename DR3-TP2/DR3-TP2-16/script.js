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

const items = document.querySelectorAll(".accordionitem");

items.forEach((item) => {
  const content = item.querySelector("p");
  if (content) {
    content.classList.add("hide");
  }
});

items.forEach((item) => {
  item.addEventListener("click", function () {
    const content = this.querySelector("p");
    const icon = this.querySelector(".more");

    if (content.classList.contains("hide")) {
      items.forEach((otherItem) => {
        if (otherItem !== this) {
          const otherContent = otherItem.querySelector("p");
          const otherIcon = otherItem.querySelector(".more");
          if (otherContent) {
            otherContent.classList.add("hide");
          }
          if (otherIcon) {
            otherIcon.textContent = "+";
          }
        }
      });

      content.classList.remove("hide");
      if (icon) {
        icon.textContent = "-";
      }
    } else {
      content.classList.add("hide");
      if (icon) {
        icon.textContent = "+";
      }
    }
  });
});
