const imgBlack = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png';
let nameQuizz;
let quizz;

function comparador (){
    return Math.random() - 0.5;
}
function searchQuizz (){
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(quizzPromise);
}
function quizzPromise (response){
    const apiData = response.data;
    //console.log(apiData);
    quizzSelected = apiData.filter( quizz => {if(quizz.title === `${nameQuizz}`){return true}});
    console.log(quizzSelected);
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
        //console.log(quizzSelectedAnswers[i]);
        screenQuizz.innerHTML+=`
        <div class="boxQuestion">
            <div style="background-color: ${quizzSelected[0].questions[i].color};" class="question">
                <h2>${quizzSelected[0].questions[i].title}</h2>
            </div>

            <div class="answers">

                <div class="answer" onclick='clickQuizz(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[0]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[0]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[0]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickQuizz(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[1]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[1]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[1]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickQuizz(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[2]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[2]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[2]].isCorrectAnswer}</span>
                </div>

                <div class="answer" onclick='clickQuizz(this)'>
                    <div style="background-image: url('${quizzSelectedAnswers[arrayRandom[3]].image}');" >
                    <img class="imgAnswer hidden" src="./assets/images/branco-opaco"> </div>
                    <h2>${quizzSelectedAnswers[arrayRandom[3]].text}</h2>
                    <span class="hidden">${quizzSelectedAnswers[arrayRandom[3]].isCorrectAnswer}</span>
                </div>
            </div>
        </div>
        `
    }
}
function openquizz(element){
    resetPage();
    nameQuizz = element.querySelector("h2").innerText;
    let idQuizz = element.querySelector(".hidden.idQuizz");
    console.log("Nome do quiz clicado: ", nameQuizz);
    console.log('Id do quizz clicado: ',idQuizz.innerText);
    searchQuizz();
}

function clickQuizz(element){
    const tagImg = element.parentNode.querySelectorAll(".imgAnswer");
    for (let i = 0; i < tagImg.length; i++){
        tagImg[i].classList.remove('hidden');
    }
    element.querySelector(".imgAnswer").classList.add('hidden');
    document.querySelectorAll(".answer").removeAttribute("onclick"); // ! ajeitar isso aq para tira o onlick após escolher uma resposta
    c('clicou em uma resposta', tagImg[0]);
}