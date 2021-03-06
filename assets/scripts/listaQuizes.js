const API = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes';
const c = console.log.bind(document);
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
function loadQuizzesUser (){
    if (localStorage.length === 0){
        c('Sem quizzes do usuário');
        bodyDom.innerHTML += `
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
        </main>`
    } else {
        c('tem quizzes do use pra renderizar');
    }
}
// * FUNÇÃO QUE CARREGA TODA A TELA01 COM AS QUIZZES
function loadWebAndList (response){
    console.log('Quizes api e quizzes user, carregou OK!');
    loadQuizzesUser();
    const apiData = response.data;
    console.log('Quizze, dados da api: ',apiData);
    const containerQuizzesList = document.querySelector(".quizzesList");
    apiData.map(
        quizz => {
        return containerQuizzesList.innerHTML +=`
        <li onclick='openquizz(this)'>
            <img style="width: 100%; border-radius: 10px; z-index: -1;" src="${quizz.image}">
            <h2>${quizz.title}</h2>
            <div class="hidden idQuizz">${quizz.id}<div>
        </li>`;
    })
}