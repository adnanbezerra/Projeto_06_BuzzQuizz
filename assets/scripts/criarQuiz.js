// Bloco de código referente à primeira parte do processo de criação de um quiz
const comeceComeço =
    `<div class="comece">Comece pelo começo</div>
        <input type="text" class="entradaQuiz tituloQuiz" placeholder="Título do seu quizz" minlength="20" maxlength="65">
        <input type="url" class="entradaQuiz urlImagem" placeholder="URL da imagem do seu quizz">
        <input type="value" class="entradaQuiz quantidadePerguntas" placeholder="Quantidade de perguntas do quizz" min="3">
        <input type="value" class="entradaQuiz quantidadeNiveis" placeholder="Quantidade de níveis do quizz" min="2">
        <button class="botaoCriarQuiz" onclick="primeiraParte()">Prosseguir para criar perguntas</button>`;

const tituloPerguntas = `<h1 class="comece">Crie suas perguntas</h1>`;
const botaoPerguntas = `<button class="botaoCriarQuiz" onclick="segundaParte()">Prosseguir para criar níveis</button>`;
const perguntas = 
    `    <div class="questionario">
    <div class="pergunta">
        <p class="tituloPergunta">Pergunta ${i}</p>
        <input type="text" placeholder="Texto da pergunta" class="textoPergunta">
        <input type="text" placeholder="Cor de fundo da pergunta" class="fundoPergunta">
    </div>

    <div class="correta">
        <p class="tituloPergunta">Resposta correta</p>
        <input type="text" placeholder="Resposta correta" class="respostaCorreta">
        <input type="url" placeholder="URL da imagem" class="imagemCorreta">
    </div>

    <div class="incorreta">
        <p class="tituloPergunta">Respostas incorretas</p>
        <input type="text" placeholder="Resposta incorreta 1" class="respostaIncorreta">
        <input type="url" placeholder="URL da imagem 1" class="imagemIncorreta">
    </div>
    <div class="incorreta">
        <input type="text" placeholder="Resposta incorreta 2" class="respostaIncorreta">
        <input type="url" placeholder="URL da imagem 2" class="imagemIncorreta">
    </div>
    <div class="incorreta">
        <input type="text" placeholder="Resposta incorreta 3" class="respostaIncorreta">
        <input type="url" placeholder="URL da imagem 3" class="imagemIncorreta">
    </div>

    </div>`

const tituloNiveis = `<h1 class="comece">Agora, decida os níveis</h1>`;
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

const tituloFinal = `<h1 class="tituloPergunta">Seu quizz está pronto!</h1>`
const botaoAcessarQuizz = `<button class="botaoCriarQuiz" onclick="acessarQuizz()">Acessar Quizz</button>`
const voltarInicio = `<p class="retornoTelaInicial" onclick="backHome()">Voltar pra home</p>`

iniciarCriação()
function iniciarCriação() {
    const container = document.querySelector(".container");
    container.innerHTML = ""
    container.innerHTML = comeceComeço;
}

let tituloQuiz;
let urlImagem;
let quantidadePerguntas;
let quantidadeNiveis;

function primeiraParte() {
    tituloQuiz = document.querySelector(".tituloQuiz").innerHTML;
    urlImagem = document.querySelector(".urlImagem").innerHTML;
    quantidadePerguntas = Number(document.querySelector(".quantidadePerguntas").innerHTML);
    quantidadeNiveis = Number(document.querySelector(".quantidadeNiveis").innerHTML);


    let condicoesChecagem =
        tituloQuiz < 20 || tituloQuiz > 65 || quantidadeNiveis < 2 || quantidadePerguntas < 3 || !urlImagem.startsWith("https://");

    if (condicoesChecagem) {
        alert("Alerta: Preencha os dados corretamente!")
        iniciarCriação();
    }
}