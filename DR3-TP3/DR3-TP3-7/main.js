// xibição de Letra Pressionada no Campo de Texto

// Crie no arquivo HTML um campo de texto e um elemento "p".
// Cada vez que o usuário pressionar uma tecla, exiba a letra
// pressionada emum parágrafo abaixo do campo.

const body = document.querySelector('body');
const keyPress = document.getElementById('keyPress');

body.addEventListener('keypress', (event) => {
    keyPress.innerHTML = `Voce pressionou a tecla: <span>${event.key.toUpperCase()}<span>`;	
});