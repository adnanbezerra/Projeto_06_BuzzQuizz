const imgBlack = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png';
let quizzId;
let quizzSelected;
let boxsQuestion = document.querySelectorAll(".boxQuestion");
let rightAnswers = 0;

function comparador (){
    return Math.random() - 0.5;
}
function openquizz(element){
    resetPage();
    quizzId = Number(element.querySelector(".hidden.idQuizz").innerText);
    c('Id do quizz clicado: ',quizzId);
    searchQuizz();
}
function searchQuizz (){
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(quizzPromise);
    promiseApi.catch(errorPromise);
}
function errorPromise (error){
    alert('error na api', error);
}
function filterQuizzById(quizz){
    if(quizz.id === quizzId)return quizz;
}
function quizzPromise (response){
    quizzSelected = response.data.filter(filterQuizzById);
    quizzSelected = quizzSelected[0];
    c(quizzSelected, 'quizzSelected');
    bodyDom.innerHTML += `
        <div class="topQuizz" style="background-image: url('${quizzSelected.image}');" >
            <img style="width: 100%; height: 100%; opacity: 60%;" src="${imgBlack}" alt="" srcset="">
            <h2>${quizzSelected.title}</h2>
        </div>

        <main class="screenQuizz">

        </main>`;
    // * loop que adiciona as caixa de perguntas no DOM
    const screenQuizz = document.querySelector(".screenQuizz");
    for (let i = 0 ; i < quizzSelected.questions.length; i++){
        let quizzSelectedAnswers = quizzSelected.questions[i].answers;
        let arrayRandom = [0,1,2,3];
        arrayRandom = arrayRandom.sort(comparador);
        screenQuizz.innerHTML+=`
        <div class="boxQuestion">
            <div style="background-color: ${quizzSelected.questions[i].color};" class="question">
                <h2>${quizzSelected.questions[i].title}</h2>
            </div>

            <div class="answers">

                <div class="answer" onclick='clickAnswer(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[0]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[0]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[0]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickAnswer(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[1]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[1]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[1]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickAnswer(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[2]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[2]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[2]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickAnswer(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[3]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[3]].text}</h2>
                    <span class="hidden ">${quizzSelectedAnswers[arrayRandom[3]].isCorrectAnswer}</span>
                </div>
            </div>
        </div>
        `
        boxsQuestion = document.querySelectorAll(".boxQuestion");
    }
}
function clickAnswer(element){
    verifyAnswer(element);
    const whiteImg = element.parentNode.querySelectorAll(".imgAnswer");
    const boxAnswers = element.parentNode.querySelectorAll(".answer");
    const trueOrFalse = element.parentNode.querySelectorAll("span");
    const titleAnswer = element.parentNode.querySelectorAll("h2");
    const currentBoxQuestion = element.parentNode.parentNode;
    for (let i = 0; i < whiteImg.length; i++){
        whiteImg[i].classList.remove('hidden');
        boxAnswers[i].removeAttribute('onclick');
        if (trueOrFalse[i].innerText != 'true'){
            titleAnswer[i].classList.add("answerFalse");
        } else {
            titleAnswer[i].classList.add("answerTrue");
        }
    }
    const answerClicked = element.querySelector(".imgAnswer");
    answerClicked.classList.add('hidden');
    for (let i = 0; i < boxsQuestion.length; i++){
        if (currentBoxQuestion.innerHTML === boxsQuestion[i].innerHTML && boxsQuestion[i+1] != undefined){
            setTimeout(scroll => (boxsQuestion[i+1].scrollIntoView()), 2000); break;
        }
    }
    renderResultQuizz();
}
function verifyAnswer (el){
    const trueOrFlase = el.querySelector("span");
    if (trueOrFlase.innerText === 'true'){
        rightAnswers++;
    }
}
function renderResultQuizz (){
    const isAllResponded = document.querySelectorAll(".imgAnswer.hidden");
    let result = Math.round(( 100 / boxsQuestion.length) * rightAnswers);
    //c('meu resultado: ', result);
    if (isAllResponded.length === boxsQuestion.length){
        let filteredLevel = quizzSelected.levels.filter(level => {if (level.minValue <= result)return true;});
        filteredLevel = filteredLevel[filteredLevel.length-1];
        renderResultDom(result, filteredLevel.title, filteredLevel.image, filteredLevel.text);
        const resultBox = document.querySelector(".resultBox");
        setTimeout(scroll => (resultBox.scrollIntoView()), 2000);
    }
}
function renderResultDom (percent, title, img, text2){
    const screenQuizz = document.querySelector(".screenQuizz");
    screenQuizz.innerHTML+=`
        <div class="resultBox">
            <div style="background-color: #EC362D;" class="question">
            <h2>${percent}% de acerto: ${title}</h2>
            </div>
            <div class="resultText">
                <div style="background-image: url('${img}');" ></div>
                <p>${text2}</p>
            </div>

        </div>
        <div class='finalButtons'>
            <button class='restartButton' onclick="restartQuizz()">Reiniciar Quizz</button>
            <button class='homeButton' onclick="backHome()">Voltar pra Home</button>
        </div>
        `
}
function restartQuizz(){
    resetPage();
    rightAnswers = 0;
    searchQuizz();
}
function backHome(){
    resetPage();
    rightAnswers = 0;
    takeQuizzesApi();
}