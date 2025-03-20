// Formulário de Quiz com Soma de Pontuação

// Crie no arquivo html um formulário, contendo três questões de múltipla escolha
// usando radio button, cada pergunta/questão deverá ter 4 respostas para o usuário
// escolher sua opção. Crie também um botão que ao ser apertado, verifique os campos 
// marcados e a cada resposta correta, some 1 à pontuação total. Exiba a pontuação em um alerta.

const form = document.querySelector('form');
const options = document.querySelectorAll('.option');
const submit = document.getElementById('submit');
let score = 0;

submit.addEventListener('click', () => {
    options.forEach((option)=>{
        if(option.checked && option.classList.contains("correct")){
            score++;
        }
    })
    alert(`Voce acertou ${score} questoes`);
    score = 0;
    form.reset();
})