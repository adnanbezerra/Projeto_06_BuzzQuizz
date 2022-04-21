const API = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes';
const mainDom = document.querySelector("main");
const containerQuizz = document.querySelector(".quizzesContainer");

function loadWeb (){
    mainDom.innerHTML += `
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
    `
    listQuizzesApi();
}

function takeQuizzesApi() {
    const promiseApi = axios.get(`${API}`);
    promiseApi.then();
}
function listQuizzesApi (){
    const containerQuizzesList = document.querySelector(".quizzesList");
    containerQuizzesList.innerHTML +=`
    <li>
        <img style="width: 100%; border-radius: 10px; z-index: -1;" src="https://d17lbu6bbzbdc8.cloudfront.net/wp-content/uploads/2019/11/10220644/os-simpsons-10-melhores-episodios-de-acordo-com-a-imdb.jpg">
        <h2>Título do quizz bem aqui (example)</h2>
    </li>`
}
