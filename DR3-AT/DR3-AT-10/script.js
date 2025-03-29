// Lidando com eventos

// Adicione um evento que capture e informe através de alerta cada caracter
// digitada em um input de id “email”.

const email = document.getElementById("email");
const tecla = document.getElementById("tecla");

// mostrando com os alertas o usuario tem que confirmar o alerta
// a cada tecla. fiz mostrando no paragrafo para nao atrapalhar o usuario
// mas de toda forma, tem na parte de baixo seguindo o enunciado

email.addEventListener("keypress", (e) => {
  tecla.innerText = `Voce clicou na tecla: "${e.key.toUpperCase()}"`;
});

// 01
// email.addEventListener("keypress", (e) => {
// tecla.innerText = alert(`Voce clicou na tecla: "${e.key.toUpperCase()}"`)
// });
