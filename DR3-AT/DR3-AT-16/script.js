// Crie um formulário contendo os campos nome, e-mail e CPF.
// Obtenha e valide as informações pelo JavaScript. O campo nome não pode estar vazio,
// o campo e-mail deve possuir um “@” e o campo CPF deve possuir 11 ou 14 caracteres. 

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const cpf = document.getElementById("cpf");
const botao = document.getElementById("botao");

botao.addEventListener("click", (event)=>{
    event.preventDefault()
    function validar() {
        if(!validacoes.validarStringSemNumero(nome.value)) return
        if(!validacoes.validarEmail(email.value)) return
        if(!validacoes.validarCpf(cpf.value)) return
        alert("Formulario enviado!")
        nome.value = ""
        email.value = ""
        cpf.value = ""
    }
    validar()
})