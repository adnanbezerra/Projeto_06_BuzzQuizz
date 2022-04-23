const imgBlack = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png';
let nameQuizz;
let quizzId;

function comparador (){
    return Math.random() - 0.5;
}
function openquizz(element){
    resetPage();
    nameQuizz = element.querySelector("h2").innerText;
    idQuizz = element.querySelector(".hidden.idQuizz");
    c("Nome do quiz clicado: ", nameQuizz);
    c('Id do quizz clicado: ',idQuizz.innerText);
    searchQuizz();
}
function searchQuizz (){
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(quizzPromise);
}
function quizzPromise (response){
    const apiData = response.data;
    //c(apiData);
    quizzSelected = apiData.filter( quizz => {if(quizz.title === `${nameQuizz}`){return true}});
    c(quizzSelected);
    bodyDom.innerHTML += `
        <div class="topQuizz" style="background-image: url('${quizzSelected[0].image}');" >
            <img style="width: 100%; height: 100%; opacity: 60%;" src="${imgBlack}" alt="" srcset="">
            <h2>${quizzSelected[0].title}</h2>
        </div>

        <main class="screenQuizz">

        </main>`;
    
    // * loop que adiciona as caixa de perguntas no DOM
    const screenQuizz = document.querySelector(".screenQuizz");
    for (let i = 0 ; i < quizzSelected[0].questions.length; i++){
        let quizzSelectedAnswers = quizzSelected[0].questions[i].answers;
        let arrayRandom = [0,1,2,3];
        arrayRandom = arrayRandom.sort(comparador);
        //c(quizzSelectedAnswers[i]);
        screenQuizz.innerHTML+=`
        <div class="boxQuestion">
            <div style="background-color: ${quizzSelected[0].questions[i].color};" class="question">
                <h2>${quizzSelected[0].questions[i].title}</h2>
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
    }
}
function clickAnswer(element){
    const whiteImg = element.parentNode.querySelectorAll(".imgAnswer");
    const boxAnswers = element.parentNode.querySelectorAll(".answer");
    const trueOrFalse = element.parentNode.querySelectorAll("span");
    const titleAnswer = element.parentNode.querySelectorAll("h2");
    const boxsQuestion = document.querySelectorAll(".boxQuestion");
    for (let i = 0; i < whiteImg.length; i++){
        whiteImg[i].classList.remove('hidden');
        boxAnswers[i].removeAttribute('onclick');
        if (trueOrFalse[i].innerText != 'true'){
            titleAnswer[i].classList.add("answerFalse");
        } else {
            titleAnswer[i].classList.add("answerTrue");
        }
    }
    for (let i = 0; i < boxsQuestion.length; i++){
        if (element.parentNode.parentNode.innerHTML === boxsQuestion[i].innerHTML){
            setTimeout(scroll => (boxsQuestion[i+1].scrollIntoView()), 2000);
            c('box seguinte: ',boxsQuestion[i+1]);
        } 
    }
    

    c(boxsQuestion[0].innerHTML === element.parentNode.parentNode.innerHTML);

    const answerClicked = element.querySelector(".imgAnswer");
    answerClicked.classList.add('hidden');
    c('Clicou em uma resposta');
}