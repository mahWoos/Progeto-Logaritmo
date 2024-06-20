const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"Como os logaritmos são usados na análise de crescimento populacional?",
        alternativas: [
            "Os logaritmos são usados para calcular a taxa de natalidade direta.",
            "Os logaritmos ajudam a modelar o crescimento exponencial da população."

        ]
    },
    {
        enunciado: "Como os logaritmos são utilizados para medir a intensidade de luz estelar em astronomia?",
        alternativas: [
            "Os logaritmos são usados apenas para medir a distância entre estrelas.",
            "Os logaritmos são usados para calcular a magnitude aparente das estrelas, comparando seu brilho com uma estrela de referência."
        ]
    }
,
    {
        enunciado: "Qual é a relação entre os logaritmos e juros compostos na economia?",
        alternativas: [
            "Os logaritmos não têm aplicação em cálculos financeiros.",
            "Os logaritmos são usados para calcular o número de períodos necessários para um investimento crescer a um valor específico."
        ]
    }
    
    
]; 
let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativa.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

