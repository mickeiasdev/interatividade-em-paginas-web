// Criação de objeto simples 

// Pergunte ao usuário seu nome, idade, e-mail e sexo.
// Crie um objeto chamado Pessoa que tenha essas propriedades
// e defina o valor das propriedades conforme os valores digitados pelo usuário.

function solicitarSexo() {
    const sexo = prompt("Digite seu sexo: [exemplo@dominio.com]")

    if(validacoes.validarCancelar(sexo)){
        if(validacoes.validarVazio(sexo) && validacoes.validarSexo(sexo)){
            alert(sexo)
        } else {
            return solicitarSexo()
        }
    } else {
        return
    }
}

solicitarSexo()