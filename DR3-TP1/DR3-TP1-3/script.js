// No arquivo script.js, siga as etapas abaixo:

// Utilizando o objeto “carro” do exercício anterior, faça com que ele tenha o método “acelerar”.
// Chame o método “acelerar” a partir de um objeto instanciado.
// Ao chamar o método “acelerar” será exibido um alerta com a mensagem: “Acelerando!”.

let carro = {
  ano: 0,
  modelo: "",
  acelerar() {
    alert("Acelerando!");
  },
};

carro.ano = 1968;
carro.modelo = "Fusca";

console.log(carro);

carro.acelerar();
