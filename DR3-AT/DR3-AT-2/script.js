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
    bairro: this.bairrode,
    cidade: this.cidade,
}

// criar funcoes de solicitacao...

const criacao = {
    solicitarNumeroDeAlunos: function() {
        const numeroDeAlunos = prompt("Digite a quantidade de alunos da instituicao: [764]");
        if(validacoes.validarCancelar(numeroDeAlunos)){
            if(validacoes.validarVazio(numeroDeAlunos) && validacoes.validarNumero(numeroDeAlunos)){
                return numeroDeAlunos
            } else {
                return this.solicitarNumeroDeAlunos()
            }
        }
    },

    solicitarNomeDiretor: function() {
        const nome = prompt("Digite o nome do diretor: [mickeias coelho]");

        if(validacoes.validarCancelar(nome)) {
            if(validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
                validacoes.corrigirNome(nome)
                return nome
            } else {
                return this.solicitarNomeDiretor()
            }
        } else {
            return;
        }
    },

    solicitarEnderecoInstituicao: function() {
        const endereco = prompt("Digite o endereco da instituicao: [rua machado de assis]");

        if(validacoes.validarCancelar(endereco)) {
            if(validacoes.validarVazio(endereco) && validacoes.validarTamanhoMin(endereco)) {
                validacoes.corrigirNome(endereco)
                return endereco
            } else {
                return this.solicitarEnderecoInstituicao()
            }
        } else {
            return;
        }
    },
    
}