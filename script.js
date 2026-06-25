const botao = document.querySelector("button")
botao.addEventListener('click', curtir)

function curtir() {
    let curtidas = document.querySelector("span")
    curtidas.textContent++;
}

//BOTAO A+
const tamanho = document.getElementById("tamanho")
tamanho.addEventListener("click", aumentarFonte)
let fonte = 16;
//função
function aumentarFonte(){
    fonte++;
    document.body.style.fontSize = fonte + "px";
}

// BOTÃO DE CONTRASTE 
const contraste = document.getElementById("contraste")
 contraste.addEventListener("click",contraste_amarelo )
 //FUNÇAO
function contraste_amarelo(){ document.body.style.color = "yellow" }

// BOTAO A-
const diminuir = document.getElementById("diminuir");

diminuir.addEventListener("click", diminuirFonte);

function diminuirFonte(){

    document.querySelectorAll("p, h1, h2").forEach(texto => {

        let tamanhoAtual = parseInt(
            window.getComputedStyle(texto).fontSize
        );

        texto.style.fontSize = (tamanhoAtual - 2) + "px";
    });

}
