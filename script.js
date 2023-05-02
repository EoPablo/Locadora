// Declarar variaveis 

const inFilme = document.getElementById('inFilme');
const inDuracao = document.getElementById('inDuracao');
const btConverter = document.getElementById('btConverter');
const outFilme = document.getElementById('outFilme');
const outTempo = document.getElementById('outTempo');

function converterTempo() {
    
    let nomeDoFilme = inFilme.value;
    let tempoDoFilme = Number(inDuracao.value);

    let horasDeDuração = Math.floor(tempoDoFilme / 60); // Vai retorna a quantidade de horas
    let minutosDeDuração = tempoDoFilme % 60; // Seria o resto da divisão

    outFilme.textContent = nomeDoFilme;
    outTempo.textContent = `${horasDeDuração} hora(s) e ${minutosDeDuração} minuto(s)`;
}

btConverter.addEventListener('click', converterTempo);