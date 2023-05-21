var gameBoard = document.getElementById("gameBoard");
var beginButton = document.getElementById("button");
var question = document.getElementById("askAway");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var answerButtons = document.getElementById("answerButtons");
var next = document.getElementById("next");
const highScores = document.getElementById(highScore);
var score = 0;
var questionCount = 0;


// starts the game and presents 1st question
beginButton.addEventListener("click", function () {
    gameBoard.style.display = "block";
    beginButton.style.display = "none";
    nextQuestion(0);
});

function nextQuestion(index) {
    // gameBoard. = "";
    question.textContent= questions[index].question;
    ans1.textContent=questions[index].answer[0].text;
    ans2.textContent=questions[index].answer[1].text;
    ans3.textContent=questions[index].answer[2].text;
    ans4.textContent=questions[index].answer[3].text;
};

// let questionCount = 0;
// let display = document.querySelector(questions);
// display.innerText = questions[questionCount];

// next.addEventListener("click", () ==> {
//    counter++;
// //     display.innerText = questions[questionCount]
// });

// for (let i = 1; i < questions.length; i++) {
//     const element = array[index];
    
// }

// function selectAnswer() {

// }

var questions = [
    {
        question: "What does % sign signify in javascript?",
        answer: [
            { text: "Division", correct: false },
            { text: "Percentage", correct: false },
            { text: "Remainder", correct: true },
            { text: "Output", correct: false },
        ]
    },
    {
        question: "What statement ends a function in javascript?",
        answer: [
            { text: "Console.log", correct: false },
            { text: "Continue", correct: false },
            { text: "Break", correct: false },
            { text: "Return", correct: true },
        ]
    },
    {
        question: "Which statement converts JSON objects into a string?",
        answer: [
            { text: "JSON.parse", correct: false },
            { text: "JSON.stringify", correct: true },
            { text: "JSON.string", correct: false },
            { text: "JSON.dif", correct: false },
        ]
    },
    {
        question: "What characters signifies an array?",
        answer: [
            { text: "[]", correct: true },
            { text: "()", correct: false },
            { text: "''", correct: false },
            { text: "{}", correct: false },
        ]
    }

];
