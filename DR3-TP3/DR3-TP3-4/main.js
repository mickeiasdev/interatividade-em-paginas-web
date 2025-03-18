const img = document.getElementById('img');
const box = document.getElementById('box');

img.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', e.target.id);
});

box.addEventListener('dragover', (e) => {
    e.preventDefault();
    box.style.border = '2px solid black'; 
    box.innerHTML = "Soltar aqui";
});

box.addEventListener('drop', (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text');
    const element = document.getElementById(data);
    if(e.target === box || e.target === box.parentElement) {
        box.innerHTML = "";
        box.appendChild(element);
    }
    box.style.border = 'none';
});

