const imgBlack = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1024px-Black_flag.svg.png';
let nameQuizz;
let quizz;

function searchQuizz (){
    const promiseApi = axios.get(`${API}`);
    promiseApi.then(quizzPromise);
}
function quizzPromise (response){
    const apiData = response.data;
    quizz = apiData.filter( quizz => {if(quizz.title === `${nameQuizz}`){return true}});
    console.log('testes', quizz)
    bodyDom.innerHTML += `

    <div class="topQuizz" style="background-image: url('${quizz[0].image}');" >
        <img style="width: 100%; height: 100%; opacity: 60%;" src="${imgBlack}" alt="" srcset="">
        <h2>${quizz[0].title}</h2>
    </div>

    <main class="screenQuizz">

        <div class="boxQuestion">

            <div style="background-color: #434CA0;" class="question">
                <h2>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</h2>
            </div>

            <div class="answers">
                <div>
                    <div style="background-image: url('https://blog.cobasi.com.br/wp-content/uploads/2022/01/gato-filhote-de-2-meses-pode-ficar-sozinho-meio.jpg');" ></div>
                    <h2>Gato</h2>
                </div>

                <div>
                    <div style="background-image: url('https://blog.cobasi.com.br/wp-content/uploads/2022/01/gato-filhote-de-2-meses-pode-ficar-sozinho-meio.jpg');" ></div>
                    <h2>Gato</h2>
                </div>
                <div>
                    <div style="background-image: url('https://blog.cobasi.com.br/wp-content/uploads/2022/01/gato-filhote-de-2-meses-pode-ficar-sozinho-meio.jpg');" ></div>
                    <h2>Gato</h2>
                </div>

                <div>
                    <div style="background-image: url('https://blog.cobasi.com.br/wp-content/uploads/2022/01/gato-filhote-de-2-meses-pode-ficar-sozinho-meio.jpg');" ></div>
                    <h2>Gato</h2>
                </div>
            </div>

        </div>
    </main>`;
}

function openquizz(element){
    resetPage();
    nameQuizz = element.querySelector("h2").innerText;
    console.log('Quizz Selecionado: ',nameQuizz);
    searchQuizz();
}