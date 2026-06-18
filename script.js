const botao = document.querySelector("button")
botao.addEventListener('click', curtir)

function curtir() {
    let curtidas = document.querySelector("span")
    curtidas.textContent++;
}

//Botao de tamanho
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
