const API = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes';
const bodyDom = document.querySelector("body");
const containerQuizz = document.querySelector(".quizzesContainer");

takeQuizzesApi();

// * ESSA FUNÇÃO ZERA A PÁGINA
function resetPage (){
    bodyDom.innerHTML = `<header><h1>BuzzQuizz</h1></header>`;
}
// * CARREGA A API
function takeQuizzesApi() {
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(loadWebAndList);
}
// * FUNÇÃO QUE CARREGA TODA A TELA01 COM AS QUIZZES
function loadWebAndList (response){
    console.log('Quizes api carregou OK!');
    bodyDom.innerHTML += `
    <header>
        <h1>BuzzQuizz</h1>
    </header>

    <main class="screenList">
        <div class="quizzesUserEmpty">
            <p>Você não criou nenhum <br> quizz ainda :(</p>
            <button onclick="createQuizz()">Criar Quizz</button>
        </div>

        <div class="quizzesUser hidden"></div>

        <div class="quizzesContainer">
            <h2>Todos os Quizzes</h2>
            <br>
            <ul class="quizzesList">
            </ul>
        </div>
    </main>
    `
    const apiData = response.data;
    const containerQuizzesList = document.querySelector(".quizzesList");
    apiData.map(quizz => {
        return containerQuizzesList.innerHTML +=`
        <li onclick='openquizz(this)'>
            <img style="width: 100%; border-radius: 10px; z-index: -1;" src="${quizz.image}">
            <h2>${quizz.title}</h2>
        </li>`
    })
}

function createQuizz() {
    resetPage();
}

