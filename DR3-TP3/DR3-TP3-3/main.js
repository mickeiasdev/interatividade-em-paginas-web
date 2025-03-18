// Formulário com Mensagem de Seleção e Exibição de Opção Escolhida

// Crie uma página HTML com um formulário, nele crie um campo de seleção (select). Quando
// o campo de seleção receber foco, exiba uma mensagem "Selecione uma opção". Quando o 
// campo de seleção mudar, exiba a opção escolhida em um elemento "p" abaixo.

const letter = document.getElementById('letter');
const response = document.getElementById('response');

letter.addEventListener("focus", () => {
  response.innerHTML = 'Selecione uma opção';		
});

letter.addEventListener("change", () => {
    response.innerHTML = `Você selecionou a opção: ${letter.value}`;
});