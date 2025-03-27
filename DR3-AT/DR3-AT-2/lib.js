const validacoes = {
    validarVazio: function(valor) {
        if(valor.trim() === "") {
            alert("Invalido! Voce digitou um valor vazio.")
            return false
        }
        return true
    },

    validarCancelar: function(valor) {
        if(valor === null) {
            alert("Voce clicou em cancelar. Encerrando o programa!")
            return false
        }
        return true
    },

    validarTamanhoMin(valor, min=3) {
        if(valor.length < min) {
            alert(`Voce nao atingiu o numero minimo de ${min} caracteres`)
            return false
        }
        return true
    },

    validarTamanhoMax(valor, max=25) {
        if(valor.length > max) {
            alert(`Voce ultrapassou o numero maximo de ${max} caracteres`)
            return false
        }
        return true
    },

    validarNumero: function(valor) {
        this.validarVazio(valor)
        valor.replace(",", ".")
        if(isNaN(valor)){
            alert("O programa espera um numero como entrada.")
            return false
        }
        return true
    },

    validarNumeroInteiro: function(valor) {
        if(!this.validarNumero(valor)) {
            return false
        }
        valor = Number(valor)
        if(!Number.isInteger(valor)){
            alert("O programa espera um numero inteiro como entrada.")
            return false
        }
        return true
    },

    validarNumeroInteiroPositivo: function(valor) {
        if(!this.validarNumeroInteiro(valor)) {
            return false
        }
        if(valor < 0) {
            alert("O programa espera um numero inteiro positivo como entrada.")
            return false
        }
        return true
    },

    validarEmail: function(valor) {
        this.validarVazio(valor);
        // usuario, arroba, dominio, pelomenos dois caracteres para o finalizar 
        const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/
        if(!regexEmail.test(valor)) {
            alert("Voce digitou um email invalido.")
            return false
        }
        valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
        return true
    },

    validarRua: function(valor) {
        this.validarVazio(valor);
        // iniciar com "rua" e ter um complemento de plmns 3 caracteres 
        const regexRua = /^rua\s.{3,}$/
        if(!regexRua.test(valor)) {
            alert("Voce digitou uma rua invalida.")
            return false
        }
        this.corrigirNome(valor)
        return true
    },

    validarSexo: function(valor) {
        this.validarVazio(valor);
        this.validarTamanhoMax(valor, 1)    
        if(valor !== "m" && valor !== "f") {
            alert('Valor invalido.')
            return false
        }
        return true
    },

    corrigirNome: function(nome) {
        // Isso faz com que qualquer quantidade de espaços seguidos seja considerada como um único separador.
        const nomes = nome.trim().split(/\s+/).map(item => item.trim());
    
        let nomesCorrigidos = nomes.map((item, i) => {
            if(["da", "de", "do"].includes(item.toLowerCase()) && i !== 0) {
                return item.toLowerCase();
            } else {
                return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
            }
        })
        return nomesCorrigidos.join(" ");
    }

    
}

//-----------------------------------------------------------------------------------------------------------

const entradas = {
    solicitarNome: function() {
        const nome = prompt("Digite seu nome e sobrenome: [mickeias coelho]");

        if(validacoes.validarCancelar(nome)) {
            if(validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
                validacoes.corrigirNome(nome)
                return nome
            } else {
                return this.solicitarNome()
            }
        } else {
            return;
        }
    },

    solicitarIdade: function() {
        const idade = prompt("Digite sua idade: [21]");

        if(validacoes.validarCancelar(idade)) {
            if(validacoes.validarVazio(idade) && validacoes.validarNumeroInteiroPositivo(idade)) {
                return idade
            } else {
                return this.solicitarIdade()
            }
        } else {
            return;
        }
    },

    solicitarEmail: function() {
        const email = prompt("Digite seu email: [exemplo@dominio.com]")
    
        if(validacoes.validarCancelar(email)){
            if(validacoes.validarVazio(email) && validacoes.validarEmail(email)){
                email.charAt(0).toLocaleUpperCase()
                return email
            } else {
                return this.solicitarEmail()
            }
        } else {
            return
        }
    },

    solicitarSexo: function() {
        const sexo = prompt("Digite seu sexo: [M/F]").toUpperCase()

        if(validacoes.validarCancelar(sexo)){
            if(validacoes.validarVazio(sexo) && validacoes.validarSexo(sexo)){
                return sexo
            } else {
                return this.solicitarSexo()
            }
        } else {
            return
        }
    },
    
    solicitarEnderecoInstituicao: function() {
        const endereco = {
            bairro: this.bairro,
            rua: this.rua,
            cidade: this.cidade
        }

        function bairro(){
            while (true) {
                let bairro = prompt("Digite o bairro da instituição: [machado de assis]");
                if (!validacoes.validarCancelar(bairro)) return;
                if (validacoes.validarVazio(bairro) && validacoes.validarTamanhoMin(bairro)) {
                    return validacoes.corrigirNome(bairro)
                }
            }
        }
        
        function rua() {
            while (true) {
                let rua = prompt("Digite a rua da instituição: [rua carlos drummond de andrade]");
                if (!validacoes.validarCancelar(rua)) return;
                if (validacoes.validarVazio(rua) && validacoes.validarTamanhoMin(rua) && validacoes.validarRua(rua)) {
                    return validacoes.corrigirNome(rua)
                 } 
            }
        }
            
            function cidade() {
                while (true) {
                   const cidade = prompt("Digite a cidade da instituicao: [cascavel]");
                   if(!validacoes.validarCancelar(cidade)) return;
                   if(validacoes.validarVazio(cidade) && validacoes.validarTamanhoMin(cidade)) {
                        return validacoes.corrigirNome(cidade)
                    }
                }
            }

        if(!(endereco.bairro = bairro())) return;
        if(!(endereco.rua = rua())) return;
        if(!(endereco.cidade = cidade())) return;

        return endereco
    },

    solicitarNumeroDeAlunos: function() {
        const numeroDeAlunos = prompt("Digite a quantidade de alunos da instituicao: [764]");
        if(!validacoes.validarCancelar(numeroDeAlunos)) return;
            if(validacoes.validarVazio(numeroDeAlunos) && validacoes.validarNumero(numeroDeAlunos)){
                return numeroDeAlunos
            } else {
                return this.solicitarNumeroDeAlunos()
            }
    },

    solicitarNomeDiretor: function() {
        const nome = prompt("Digite o nome do diretor: [mickeias coelho]");

        if(!validacoes.validarCancelar(nome)) return;
            if(validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
                validacoes.corrigirNome(nome)
                return nome
            } else {
                return this.solicitarNomeDiretor()
            }
    },

    solicitarAnoFundacao: function() {
        const numero = prompt("Digite o ano de fundacao: [1997]")

        if(!validacoes.validarCancelar(numero)) return;
            if(validacoes.validarVazio(numero) && validacoes.validarNumero(numero)) {
                return numero
            } else {
                return this.solicitarAnoFundacao()
            }
    },
    
}