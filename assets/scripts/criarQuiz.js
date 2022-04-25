// Bloco de código referente à primeira parte do processo de criação de um quiz
const comeceComeço =
    `<div class="comece">Comece pelo começo</div>
        <input type="text" class="entradaQuiz tituloQuiz" placeholder="Título do seu quizz" minlength="20" maxlength="65">
        <input type="url" class="entradaQuiz urlImagem" placeholder="URL da imagem do seu quizz">
        <input type="value" class="entradaQuiz quantidadePerguntas" placeholder="Quantidade de perguntas do quizz" min="3">
        <input type="value" class="entradaQuiz quantidadeNiveis" placeholder="Quantidade de níveis do quizz" min="2">
        <button class="botaoCriarQuiz" onclick="primeiraParte()">Prosseguir para criar perguntas</button>`;

//iniciarCriação()
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