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
        valor.toLowerCase()
        return true
    },

    validarSexo: function() {
        
    }
}

//--------------------------------------------------------------------------------------------------

const entradas = {
    solicitarNome: function() {
        const nome = prompt("Digite seu nome:");

        if(validacoes.validarCancelar(nome)) {
            if(validacoes.validarVazio(nome) && validacoes.validarTamanhoMin(nome)) {
                return nome
            } else {
                return solicitarNome()
            }
        } else {
            return;
        }
    },

    solicitarIdade: function() {
        const idade = prompt("Digite sua idade:");

        if(validacoes.validarCancelar(idade)) {
            if(validacoes.validarVazio(idade) && validacoes.validarNumeroInteiroPositivo(idade)) {
                return idade
            } else {
                return solicitarIdade()
            }
        } else {
            return;
        }
    },

    solicitarEmail: function() {
        const email = prompt("Digite seu email: [exemplo@dominio.com]")
    
        if(validacoes.validarCancelar(email)){
            if(validacoes.validarVazio(email) && validacoes.validarEmail(email)){
                alert(email)
            } else {
                return solicitarEmail()
            }
        } else {
            return
        }
    },

    solicitarSexo: function() {

    }
}