// Detecção de Letra no Campo de Texto

// Crie no arquivo HTML um formulário com um campo de texto. Quando o usuário digitar a letra "A",
// exiba uma mensagem dizendo "Você pressionou a letra A". Caso contrário, exiba uma mensagem que diga
// "Você pressionou uma letra diferente da solicitada"

const name = document.getElementById('name');
const msg = document.getElementById('msg');

name.addEventListener("keydown", function(event) {
    if (event.key === "a" || event.key === "A") {
        msg.textContent = 'Você pressionou a letra A';
    } else {
        msg.textContent = 'Você pressionou uma letra diferente da esperada';
    }
});