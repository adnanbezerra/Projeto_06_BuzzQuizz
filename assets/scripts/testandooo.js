let objeto = {
    title: "",
    image: "",
    questions: [],
    levels: [],
}
let amountLevels;

function createQuizz (){
    resetPage();
    bodyDom.innerHTML += `
    <div class="boxInput" style="max-width: 1100px;">
        <h2>Começo Sem validações</h2>
        <input class="titleQuizz" type="text" placeholder="Título do seu quizz" maxlength="65">
        <input class="urlImgQuizz" type="text" placeholder="Url da imagem do quizz" >
        <input class="amountQuestions" type="number" placeholder="Quantidade de perguntas do quizz (3 - 10)" min="3" max="6" >
        <input class="levelsQuizz" type="number" placeholder="Quantidade de níveis do quizz (2 - 10)">
        <button onclick="nextPage()">Prosseguir para criar perguntas</button>
    </div>`

}

function nextPage(){
    amountLevels =  Number(document.querySelector(".levelsQuizz").value);
    objeto.title = document.querySelector(".titleQuizz").value;
    objeto.image = document.querySelector(".urlImgQuizz").value;
    const questionsAmount = Number(document.querySelector(".amountQuestions").value);
    c(objeto);
    resetPage();
    for (let i = 0; i < questionsAmount; i++ ){
        bodyDom.innerHTML += `
        <div class="boxInput questionsCreate">
            <details style="display: flex; flex-direction: column; width: 100%;">
            <summary style="font-weight: bold; font-size: 1.3em;">Pergunta ${i+1}</summary>
            <br>
            <input class="questionText" type="text" placeholder="Texto da pergunta" maxlength="65">
            <br>
            <input class="questionColor" type="text" placeholder="Cor de fundo da pergunta" >

            <br>
            <h2 style="font-weight: bold; font-size: 1.3em;">Resposta Correta</h2>
            <br>
            <input class="rightAnswerText" type="text" placeholder="Resposta Correta" maxlength="65">
            <br>
            <input class="rightAnswerUrl" type="text" placeholder="Url da Imagem" >

            <br>
            <h2 style="font-weight: bold; font-size: 1.3em;">Respostas incorretas </h2>
            <br>
            <input class="wrongAnswer01" type="text" placeholder="Resposta Incorreta 01" maxlength="65">
            <br>
            <input class="wrongUrl01" type="text" placeholder="Url da imagem 01" >
            <br>
            <input class="wrongAnswer02" type="text" placeholder="Resposta Incorreta 02" maxlength="65">
            <br>
            <input class="wrongUrl02" type="text" placeholder="Url da imagem 02" >
            <br>
            <input class="wrongAnswer03" type="text" placeholder="Resposta Incorreta 03" maxlength="65">
            <br>
            <input class="wrongUrl03" type="text" placeholder="Url da imagem 03" >
            </details>
        </div>`;
    }
    bodyDom.innerHTML+=`
    <button class='buttonLevels' onclick="pageLevels()">Prosseguir para criar niveis</button>
    `
    
}

function pageLevels (){
    resetPage();
    for (let i = 0; i < amountLevels; i++){
        bodyDom.innerHTML += `
        <div class="boxInput questionsCreate">
            <details style="display: flex; flex-direction: column; width: 100%;">
                <summary style="font-weight: bold; font-size: 1.3em;">Nível ${i+1}</summary>
                <br>
                <input class="titleNivel" type="text" placeholder="Titulo do nível" maxlength="65">
                <br>
                <input class="minPercent" type="number" placeholder="% de acerto mínima" maxlength="2">
                <br>
                <input class="urlNivel" type="text" placeholder="Url da imagem do nível">
                <br>
                <input class="textNivel" type="text" placeholder="Descrição do Nível" >

            </details>
            <button onclick="finishQuizz()">Finizalizar Quizz</button>
        </div>`;
    }
    
}
function finishQuizz(){
    resetPage();
    bodyDom; // * ajeitar dps
    c()
}