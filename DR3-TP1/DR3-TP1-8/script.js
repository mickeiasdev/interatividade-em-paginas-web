// No arquivo script.js, siga as etapas abaixo:

// Crie um objeto `“advogado”` que possua as propriedades “nome”, “horasTrabalhadas” e “valorHora”.
// Crie também neste objeto, um método chamado “calcularGanho”.
// Chame o método "calcularGanho" através de um objeto instanciado.
// No método, realize a multiplicação das “horas trabalhadas” pelo valor que o advogado ganha por hora.
// Use a palavra chave “this".

let advogado = {
  nome: "Lucas",
  horas: 138,
  valor: 75,
  calcularGanho() {
    return this.horas * this.valor;
  },
};

let ganhoMensal = advogado.calcularGanho();
console.log(ganhoMensal);

alert(`O advogado ${advogado.nome} recebeu R$ ${ganhoMensal} este mês.`);
