// Criação de objeto simples 

// Pergunte ao usuário seu nome, idade, e-mail e sexo.
// Crie um objeto chamado Pessoa que tenha essas propriedades
// e defina o valor das propriedades conforme os valores digitados pelo usuário.

const pessoa = {
    nome: this.nome,
    idade: this.idade,
    email: this.email,
    sexo: this.sexo,
}

const nome = entradas.solicitarNome();
if(nome){
    const idade = entradas.solicitarIdade()
    if(idade) {
        const email = entradas.solicitarEmail()
        if(email) {
            const sexo = entradas.solicitarSexo()
            if(sexo) {
                alert(`
                    Nome: ${pessoa.nome}
                    Idade: ${pessoa.idade}
                    Email: ${pessoa.email}
                    Sexo: ${pessoa.sexo}`);  
            }
        }
    }
}