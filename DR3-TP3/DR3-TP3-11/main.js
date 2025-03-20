// Formulário com Aceitação de Termos e Condições

// Crie no arquivo html um formulário e nele crie um título e um parágrafo,
// simulando um campo obrigatório que deve ser lido e aceito. Para isso, crie
// um campo de “checkbox”, um botão e faça com que esse form só seja enviado
// se o usuário marcar o checkbox, aceitando assim os “termos e condições”.
// Mostre um alerta ao usuário se puder ou não enviar o form.

const form = document.querySelector('form');
const checkbox = document.getElementById('checkbox');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    if(!checkbox.checked){
        event.preventDefault();
        alert('Você precisa aceitar os termos e condições para enviar o formulário');
    }
}
)