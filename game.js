const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0; 
let questionCounter = 0;
let availableQuestions = [];

let questions = [
{
    question: "Inside which HTML element do we put in the Javascript?",
    choice1: "<script>",
    choice2:"<scripting>",
    choice3:"<javascript>",
    choice4:"<js>",
    answer: 1
},
{
    question: "This is a sample question",
    choice1: "Answer 1",
    choice2:"Answer 2",
    choice3:"Answer",
    choice4:"Answer 4",
    answer: 3
},
{
    question: "This is another sample question",
    choice1: "Answer a",
    choice2:"Answer b",
    choice3:"Answer c",
    choice4:"Answer",
    answer: 4
},
{
    question: "This is a final sample question",
    choice1: "Answer 1",
    choice2:"Answer",
    choice3:"Answer 3",
    choice4:"Answer 4",
    answer: 2
}


]

// CONSTANTS

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("finalScore", score)
        return window.location.assign("/end.html");
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question; 

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        // console.log(selectedAnswer);

        if(selectedAnswer == currentQuestion.answer){
            console.log("answer is right")
            score+=1
            console.log("score is now " + score)
        } else {
            console.log("answer is wrong")
            console.log("score is " + score)
        }
        getNewQuestion();
    });
});

startGame();