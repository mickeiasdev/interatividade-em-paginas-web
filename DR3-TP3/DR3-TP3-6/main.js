// Formulário Estilizado com Validação de Campos Obrigatórios

// Crie um arquivo HTML que contenha um formulário estilizado com CSS.]
// O formulário deve ter campos para nome, e-mail e uma mensagem.
// Estilize os campos para que tenham bordas arredondadas e mudem de
// cor ao receber foco, faça também a validação de todos os campos do
// formulário, fazendo-os obrigatórios para o envio.

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {

let valid = true;

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

nameError.textContent = "";
emailError.textContent = "";
messageError.textContent = "";

if (name.length < 3) {
    nameError.textContent = 'O nome deve ter pelo menos 3 caracteres';
    valid = false;
}

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
if (!emailRegex.test(email)) {
    emailError.textContent = 'O e-mail é inválido';
    valid = false;
}

if (message.length < 10) {
    messageError.textContent = 'A mensagem deve ter pelo menos 10 caracteres';
    valid = false;
}

if (!valid) {
    event.preventDefault();
}

});





