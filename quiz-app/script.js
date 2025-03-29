const quizData = [
    {
        question : "How old r siva ?",
        a : '10',
        b : '20',
        c : '19',
        d : '23',
        correct : 'd'
    },
    {
        question : "Which is the most popular programming language used in 2024 ?",
        a : 'Java',
        b : 'Python',
        c : 'C',
        d : 'JavaScript',
        correct : 'b'
    },
    {
        question : "Who is the President of India ?",
        a : 'Droupadi Murmu',
        b : 'APJ Abdul Kalam',
        c : 'Pratibha Pattel',
        d : 'Rajendra Prasad',
        correct : 'a'
    },
    {
        question : "Who is the President of US ?",
        a : 'Florin Pop',
        b : 'Ivan Saldano',
        c : 'Donald Trump',
        d : 'Mihal Andrew',
        correct : 'c'
    },
    {
        question : "What is the HTML stands for ?",
        a : 'HyperText Markup Language',
        b : 'HyperText Media Language',
        c : 'HyperTerm media Language',
        d : 'Cascading Stye Sheets',
        correct : 'a'
    }
]

const questionEl = document.querySelector('#question')
const aText = document.querySelector('#aText')
const bText = document.querySelector('#bText')
const cText = document.querySelector('#cText')
const dText = document.querySelector('#dText')
const answerEls = document.querySelectorAll('.answer')
const submitEl = document.querySelector('#submit-bt')
const quizEl = document.querySelector('.quiz')

let currentQuiz = 0
let score = 0

function loadQuiz(){
    deSelected()
    const currentQuizData = quizData[currentQuiz]

    questionEl.innerHTML = currentQuizData.question
    aText.innerHTML = currentQuizData.a
    bText.innerHTML = currentQuizData.b
    cText.innerHTML = currentQuizData.c
    dText.innerHTML = currentQuizData.d

}

loadQuiz()

function getSelected(){
    let answer = undefined

    answerEls.forEach((answerEl) => {
        if (answerEl.checked){
            answer = answerEl.id
            console.log(answer)
        }
    })
    return answer
}

function deSelected(){
    answerEls.forEach((answerEl) => {
        answerEl.checked = false
    })
}

submitEl.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if (answer === quizData[currentQuiz].correct){
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length){
            loadQuiz()
        }else {
            quizEl.innerHTML = `<h3>Yeah You Won...
            Your Score : ${score} / ${quizData.length}</h3>
            <button onclick="location.reload()" id="submit-bt">Reload</button>`
        }
    }    
})

