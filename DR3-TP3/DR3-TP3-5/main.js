// Formulário com Mensagem de Agradecimento

// Crie no arquivo HTML um formulário que solicite o nome e o e-mail do
// usuário. Ao enviar o formulário, exiba uma mensagem de agradecimento
// com as informações fornecidas em um alerta.

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    if (nameValue === '' || emailValue === '') {
        alert('Preencha os campos corretamente!');
        return
    } 
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+(\.[a-z]{2,})?$/i;
    if (!emailRegex.test(emailValue)) {
        alert('Email inválido. preencha os campos corretamente!');
        return
    }
    alert('Formulário enviado com sucesso!');
});