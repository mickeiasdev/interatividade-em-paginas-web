//Grupo - Event Listener 1

// No arquivo script.js, siga as etapas abaixo:
// Adicione um event listener de keydown, ao elemento <input id=“texto”>.
// Verifique se o usuário apertou a tecla Enter enquanto está com o input selecionado. Caso tenha apertado a tecla, o conteúdo do elemento <input> será copiado para o span de id "nome". Após isso limpe o conteúdo do elemento <input>.
// Link: https://codesandbox.io/p/sandbox/5dhfcy
// Observações:

// Não faça as alterações manualmente no arquivo index.html.
// Utilize o DOM para resolver o exercício.
// Utilize o `textContent`, para alterar o `conteúdo` do elemento <span>.

const nome = document.getElementById("nome");
const texto = document.getElementById("texto");

texto.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && document.activeElement === texto) {
    nome.textContent = texto.value;
    texto.value = "";
  }
});