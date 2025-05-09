// Redirecionamento com Alerta (onload)

// Objetivo: Solicitar uma URL ao usuário e redirecionar a navegação.
// Requisitos:
// Crie uma tag "a" sem link de navegação e com conteúdo "Link".
// Ao carregar a página, exiba um prompt pedindo uma URL.
// Atribua estar URL fornecida pelo usuário ao link.

let link = prompt("Informe o link:");
window.onload = () => (document.getElementById("a").href = link);
