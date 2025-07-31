import { PALAVRAS_RUINS } from "./palavrasRuins.js"
const BotãoMostraPalavras = document.querySelector('#botão-palavrachave');

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
   const texto = document.querySelector('#entrada-de-texto').valeu;
   const campoResultado = document.querySelector('#resultado-palavrachave');
   const palavrasChave = processaTexto(texto);
   campoResultado.textContent = palavra.join(", ");
} 

function processaTexto(texto) {
    let palavras = texto.split(/\P{L}+/u);
    for(let i in palavras){
        palavras[i] = palavras[i].tolowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contraFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    function ordenaPalavra(p1, p2){
        return frequencias[p2] - frequencias[p1]
     }
    console.log(ordenadas);
    return ordenadas.slice(0,10);
}

function contraFrequencias(palavras){
    let frequencias = {};
    for(let i of palavras){
        frequencias[i] = 0;
        for (let j of palavras){
            if (i == j){
                frequencias[i]++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    
    const palavrasBoas = [];
    for (let palavras of palavras){
        if(!PALAVRAS_RUINS.has(palavra) && palavra.lenght > 2){
            palavrasBoas.push(palavras);
        }
    }
    return palavrasBoas;
}