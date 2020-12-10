
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const questionTitle = document.getElementById("question-title");
const answerButtonsElement = document.getElementById("answer-buttons");
let shuffledQuestions, currentQuestionIndex=0;

startBtn.addEventListener("click", startGame);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame (){

   console.log('Started');
if(startBtn.innerText == 'ReStart'){
    startBtn.innerText = 'Start';
}

   shuffledQuestions = questions.sort(() => Math.random()-0.5);
   currentQuestionIndex=0
   questionContainerElement.classList.add('hide');
   
  
   setNextQuestion()
}


function setNextQuestion(){
    startBtn.classList.add('invisible');
    nextBtn.classList.remove('invisible');
    resetState()
    clearStatusClass(document.body)
    if(shuffledQuestions.length > currentQuestionIndex ) {

        showQuestion(shuffledQuestions[currentQuestionIndex])
    }
    

    if (shuffledQuestions.length > currentQuestionIndex ) {

        nextBtn.classList.remove('hide');
    }
    else
    {
        //document.getElementById('question-container').innerText = 'Click on Restart now '
        // if(null !=  document.getElementById('question'))
        // document.getElementById('question').innerHTML = ''
        startBtn.classList.remove('invisible');
        startBtn.innerText = 'ReStart';
        startBtn.classList.remove('hide');
        questionElement.innerText = ' Click on ReStart now'
    }


}

function resetState(){

    nextBtn.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}

function showQuestion(question){

    questionTitle.innerText = ' '
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button');

        button.innerText = answer.text
        button.classList.add('btn');

        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        answerButtonsElement.appendChild(button)

        button.addEventListener('click', selectAnswer)
    });

}


function selectAnswer(e) {

    const selectedAnswer = e.target;
    const correct = selectedAnswer.dataset.correct;
    setStatusClass(document.body, correct);

    Array.from(answerButtonsElement.children).forEach( button => {
        
        const correct = button.dataset.correct;

        setStatusClass(button, correct);
    });


}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    
    if(correct){
        element.classList.add('correct');
    }
    else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {

element.classList.remove('correct');
element.classList.remove('wrong');
}


function endGame(){


}

const questions = [
 
    {
    question: 'What is 2 + 2?',
    answers: [
        {text: '4', correct: true},
        {text:'22', correct: false}, 
        {text:'12', correct: false},
        {text:'8', correct: false},
    ]
    },
    {
        question: 'What is 4 * 2?',
        answers: [
            {text:'6', correct: false},
            {text: '8', correct: true},
            {text:'16', correct: false},
            {text:'26', correct: false}, 
        ]
    },
    {
        question: 'What is capital of Australia?',
        answers: [
            {text: 'Melbourne', correct: false},
            {text:'Sydney', correct: true}, 
            {text:'Brisbane', correct: false}, 
            {text:'Adelaide', correct: false}, 
        ]
    },
    {
        question: 'What is the fastest animal?',
        answers: [
            {text: 'Elephant', correct: false},
            {text:'Tiger', correct: false}, 
            {text:'Cheetah', correct: true}, 
            {text:'Fox', correct: false}, 
        ]
    },
    {
        question: 'What is the total number of alphabets?',
        answers: [
            {text: '8', correct: false},
            {text:'26', correct: true}, 
            {text:'16', correct: false}, 
            {text:'6', correct: false}, 
            
        ]
    }
        

]