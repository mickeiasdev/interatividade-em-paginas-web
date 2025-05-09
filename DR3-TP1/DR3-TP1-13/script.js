// No arquivo script.js, siga as etapas abaixo:

// Peça ao usuário para informar o raio de um círculo.
// Crie um objeto “circulo” que tenha:
// Uma propriedade de `raio` com o valor informado pelo usuário.
// E dois métodos, um para calcular a `circunferência` e outro para calcular a `área`.
// Exiba a circunferência através da chamada do método respectivo do objeto “circulo”.
// Exiba a área através da chamada do método respectivo do objeto “circulo”.
// DICA: talvez seja necessário usar a constante `Math.PI` para este exercício:
// Considere para a área:
// Área = Math.PI * raio * raio
// Considere para a circunferência:
// Circunferência = Math.PI * raio * 2

let userRaio = Number(prompt("Informe o raio do circulo:"));

class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  circunferencia() {
    return 2 * Math.PI * this.raio;
  }

  area() {
    return Math.PI * Math.pow(this.raio, 2);
  }
}

let raioCirculo = new Circulo(userRaio);

alert(`
Circunferencia: ${raioCirculo.circunferencia().toFixed(2)}
Raio: ${raioCirculo.area().toFixed(2)}
`);
