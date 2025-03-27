//  Criação de objetos aninhados 

// Crie um objeto chamado “escola” que possui as propriedades:
// número de alunos, nome do diretor, ano de fundação e endereço. 

// O endereço é um objeto que possui as propriedades: rua, bairro e cidade.

const escola = {
    numeroDeAlunos: this.numeroDeAlunos,
    diretor: this.diretor,
    anoFundacao: this.anoFundacao,
    endereco: this.endereco
}

const endereco = {
    rua: this.rua,
    bairro: this.bairro,
    cidade: this.cidade,
}

entradas.solicitarEnderecoInstituicao()