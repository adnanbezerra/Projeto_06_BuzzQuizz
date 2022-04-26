// Bloco de código com as variáveis a serem usadas na primeira etapa da criação de um quizz
let tituloQuiz;
let urlImagem;
let quantidadePerguntas;
let quantidadeNiveis;

// Criação dos objetos referentes a cada quizz
let Quizz = {
    id: "",
    image: "",
    level: [],
    questions: [],
    title: ""
}

let Level = {
    constructor(image, minValue, text, title) {
        this.image = image;
        this.minValue = minValue;
        this.text = text;
        this.title = title;
    },
    image: "",
    minValue: "",
    text: "",
    title: ""
}

let Questions = { 
    constructor(answers, color, title) {
        this.answers = answers;
        this.color = color;
        this.title = title;
    },  
    answers: [],
    color: "",
    title: ""
}

let Answer = {
    constructor(image, isCorrectAnswer, text){
        this.image = image;
        this.isCorrectAnswer = isCorrectAnswer;
        this.text = text;
    },
    image: "",
    isCorrectAnswer: "",
    text: ""
}

// Bloco de código referente à primeira parte do processo de criação de um quiz
const comeceComeco =
    `<h1 class="tituloQuestionario">Comece pelo Começo</h1>
    <div class="questionario primeiro">
        <div class="pergunta">
        <input type="text" class="tituloQuiz" placeholder="Título do seu quizz" minlength="20" maxlength="65">
        <input type="url" class="urlImagem" placeholder="URL da imagem do seu quizz">
        <input type="value" class="quantidadePerguntas" placeholder="Quantidade de perguntas do quizz" min="3">
        <input type="value" class="quantidadeNiveis" placeholder="Quantidade de níveis do quizz" min="2">
        </div>
    </div>
    <button class="botaoCriarQuiz" onclick="primeiraParte()">Prosseguir para criar perguntas</button>`;

// Esta parte é responsável por criar o HTML das perguntas a serem usadas na criação de quizz
const tituloPerguntas = `<h1 class="tituloQuestionario">Crie suas perguntas</h1>`;
const botaoPerguntas = `<button class="botaoCriarQuiz" onclick="segundaParte()">Prosseguir para criar níveis</button>`

// Este bloco é responsável por criar o HTML dos níveis do quizz em questão
const tituloNiveis = `<h1 class="tituloQuestionario">Agora, decida os níveis</h1>`;
const botaoNiveis = `<button class="botaoCriarQuiz" onclick="terceiraParte()">Finalizar Quizz</button>`
const niveis = `<div class="questionario">
    <div class="nivel">
        <p class="tituloPergunta">Nível ${i}</p>
        <input type="text" placeholder="Título do nível">
        <input type="text" placeholder="% de acerto mínima">
        <input type="url" placeholder="URL da imagem do nível">
        <input type="text" placeholder="Descrição do nível">
    </div>
    </div>`

// Este bloco é responsável por criar o HTML da tela final de criação do quizz
const tituloFinal = `<h1 class="tituloQuestionario">Seu quizz está pronto!</h1>`
const botaoAcessarQuizz = `<button class="botaoCriarQuiz" onclick="acessarQuizz()">Acessar Quizz</button>`
const voltarInicio = `<p class="retornoTelaInicial" onclick="backHome()">Voltar pra home</p>`


// Esta é a função que dá início ao processo de criação de um novo quizz
function iniciarCriação() {
    resetPage()
    bodyDom.innerHTML += comeceComeco;
}

function primeiraParte() {
    Quizz.title = document.querySelector(".tituloQuiz").value;
    Quizz.image = document.querySelector(".urlImagem").value;
    quantidadePerguntas = Number((document.querySelector(".quantidadePerguntas").value));
    console.log(quantidadePerguntas)
    quantidadeNiveis = Number(document.querySelector(".quantidadeNiveis").value);


    let condicoesChecagem =
        Quizz.title.length >= 20 && Quizz.title.length >= 65 && quantidadeNiveis <= 2 && quantidadePerguntas > 2 && !urlImagem.startsWith("https://");

    if (condicoesChecagem) {
        alert("Alerta: Preencha os dados corretamente!")
        iniciarCriação();
        return;
    }

    iniciaSegunda();
}

// Esta função prepara a tela para iniciar a segunda etapa da criação das perguntas de um quizz
function iniciaSegunda() {
    resetPage();

    bodyDom.innerHTML += tituloPerguntas;

    for (let i = 0; i < quantidadePerguntas; i++) {
        bodyDom.innerHTML += `<div class="questionario">
        <div class="pergunta">
            <p class="tituloPergunta">Pergunta ${i + 1}</p>
            <input type="text" placeholder="Texto da pergunta" class="textoPergunta numero${i}">
            <input type="text" placeholder="Cor de fundo da pergunta" class="fundoPergunta numero${i}">
        </div>
    
        <div class="correta">
            <p class="tituloPergunta">Resposta correta</p>
            <input type="text" placeholder="Resposta correta" class="respostaCorreta numero${i}">
            <input type="url" placeholder="URL da imagem" class="imagemCorreta numero${i}">
        </div>
    
        <div class="incorreta">
            <p class="tituloPergunta">Respostas incorretas</p>
            <input type="text" placeholder="Resposta incorreta 1" class="respostaIncorreta1 numero${i}">
            <input type="url" placeholder="URL da imagem 1" class="imagemIncorreta1 numero${i}">
        </div>
        <div class="incorreta">
            <input type="text" placeholder="Resposta incorreta 2" class="respostaIncorreta2 numero${i}">
            <input type="url" placeholder="URL da imagem 2" class="imagemIncorreta2 numero${i}">
        </div>
        <div class="incorreta">
            <input type="text" placeholder="Resposta incorreta 3" class="respostaIncorreta2 numero${i}">
            <input type="url" placeholder="URL da imagem 3" class="imagemIncorreta2 numero${i}">
        </div>
    
        </div>`;
    }

    bodyDom.innerHTML += botaoPerguntas;

}

// Função que coordena a segunda etapa da criação de um quizz, a saber a parte de perguntas e respostas
function segundaEtapa() {
    
}

function validaDados() {

    let arrayDados = [];
    for(let i = 0; i < quantidadePerguntas; i ++) {
        arrayDados.append(coletaDados(i));
    }
   
    let validaLinks = urlImagem.startsWith("https://") && !urlIncorreta1.startsWith("https://") && !urlIncorreta2.startsWith("https://") && !urlIncorreta3.startsWith("https://");
    let validaTextos = respostaCorreta !== null && respostaIncorreta1 !== null;

    for(let i = 0; i < quantidadePerguntas; i++) {
        if(!(validaLinks && validaTextos)) {
            alert("Preencha os dados corretamente!");
            iniciaSegunda();
        }
    }
}

function coletaDados(i) {
    let nomePergunta = document.querySelector(`.textoPergunta.numero${i}`).value;
    let corPergunta = document.querySelector(`.fundoPergunta.numero${i}`).value;

    let respostaCorreta = document.querySelector(`.respostaCorreta.numero${i}`).value;
    let imagemCorreta = document.querySelector(`.imagemCorreta.numero${i}`).value;

    let respostaIncorreta1 = document.querySelector(`.respostaIncorreta1.numero${i}`).value;
    let urlIncorreta1 = document.querySelector(`.imagemIncorreta1.numero${i}`).value;

    let respostaIncorreta2 = document.querySelector(`.respostaIncorreta2.numero${i}`).value;
    let urlIncorreta2 = document.querySelector(`.imagemIncorreta2.numero${i}`).value;

    let respostaIncorreta3 = document.querySelector(`.respostaIncorreta3.numero${i}`).value;
    let urlIncorreta3 = document.querySelector(`.imagemIncorreta3.numero${i}`).value;

    return [nomePergunta, corPergunta, respostaCorreta, imagemCorreta, respostaIncorreta1, urlIncorreta1, respostaIncorreta2, urlIncorreta2, respostaIncorreta3, urlIncorreta3];
}