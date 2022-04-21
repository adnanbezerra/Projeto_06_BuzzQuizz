const API = 'https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes';
const mainDom = document.querySelector("main");
const containerQuizz = document.querySelector(".quizzesContainer");

function takeQuizzesApi() {
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(loadWebAndList);
}

function loadWebAndList (response){
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
    const apiData = response.data;
    const containerQuizzesList = document.querySelector(".quizzesList");
    apiData.map(quizz => {
        return containerQuizzesList.innerHTML +=`
        <li>
            <img style="width: 100%; border-radius: 10px; z-index: -1;" src="${quizz.image}">
            <h2>${quizz.title}</h2>
        </li>`
    })
}


