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
    console.log(apiData);
    quizzSelected = apiData.filter( quizz => {if(quizz.title === `${nameQuizz}`){return true}});
    console.log(quizzSelected);
    bodyDom.innerHTML += `
        <div class="topQuizz" style="background-image: url('${quizzSelected[0].image}');" >
            <img style="width: 100%; height: 100%; opacity: 60%;" src="${imgBlack}" alt="" srcset="">
            <h2>${quizzSelected[0].title}</h2>
        </div>

        <main class="screenQuizz">

        </main>`;
    const screenQuizz = document.querySelector(".screenQuizz");
    for (let i = 0 ; i < quizzSelected[0].questions.length; i++){
        let qualMelhorAnimeAnswers = quizzSelected[0].questions[i].answers;
        let arrayRandom = [0,1,2,3];
        arrayRandom = arrayRandom.sort(comparador);
        console.log(qualMelhorAnimeAnswers[i]);
        screenQuizz.innerHTML+=`
        <div class="boxQuestion">
            <div style="background-color: ${quizzSelected[0].questions[i].color};" class="question">
                <h2>${quizzSelected[0].questions[i].title}</h2>
            </div>

            <div class="answers">
                <div onlclick="clickQuizz()">
                    <div style="background-image: url('${qualMelhorAnimeAnswers[arrayRandom[0]].image}');" ></div>
                    <h2>${qualMelhorAnimeAnswers[arrayRandom[0]].text}</h2>
                </div>

                <div onlclick="clickQuizz()>
                    <div style="background-image: url('${qualMelhorAnimeAnswers[arrayRandom[1]].image}');" ></div>
                    <h2>${qualMelhorAnimeAnswers[arrayRandom[1]].text}</h2>
                </div>
                <div onlclick="clickQuizz()>
                    <div style="background-image: url('${qualMelhorAnimeAnswers[arrayRandom[2]].image}');" ></div>
                    <h2>${qualMelhorAnimeAnswers[arrayRandom[2]].text}</h2>
                </div>

                <div onlclick="clickQuizz()>
                    <div style="background-image: url('${qualMelhorAnimeAnswers[arrayRandom[3]].image}');" ></div>
                    <h2>${qualMelhorAnimeAnswers[arrayRandom[3]].text}</h2>
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
    console.log("nome do quiz clicado: ", nameQuizz);
    console.log('id do quizz clicado: ',idQuizz.innerText);
    searchQuizz();
}

function clickQuizz(){
    
}