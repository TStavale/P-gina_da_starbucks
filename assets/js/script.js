let image = document.querySelector(".starbucks"); /* Variavel para capturar a img grande, para troca.*/

let circle = document.querySelector(".circle"); /* Variavel para capturar o circulo por trás da img grande, para troca de cor.*/

function changeImage(endereco) {
    image.src = endereco
    circle.style.backgound = color
}


