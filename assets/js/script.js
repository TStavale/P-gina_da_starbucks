let image = document.querySelector(".starbucks"); /* Variavel para capturar a img grande, para troca.*/

let circle = document.querySelector(".circle"); /* Variavel para capturar o circulo por trás da img grande, para troca de cor.*/

function changeImage(endereco) {
    image.src = endereco /* Aqui esstou pegando a variavel que está com a imagems guardada e informo que quero trocar ela, 
                            como ela esta no html, tenho que imformar o onde quer mexer nele (.src). */
}

function changeColor(color) {
    circle.style.background = color /* Aqui esstou pegando a variavel que está com a cor guardada e informo que quero trocar ela, 
                                    como ela esta no css, tenho que imformar que é nele que quero mexer (.stylo) e o que quero mecher 
                                    dentro da classe(background). */
}

