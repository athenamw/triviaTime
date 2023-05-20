var gameBoard = document.getElementById("gameBoard");
var beginButton = document.getElementById("button")
var question = document.getElementById("question")
var ans1 = do


document.getElementById("button").addEventListener("click", function () {
    gameBoard.style.display = "block";
    beginButton.style.display = "none";
});

function nextQuestion() {
    gameBoard.style.display = "none";
    
}

function showQuestion(question){
    
}

function selectAnswer() {

}

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
        question: "What statement ends a function in javascript?,
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
            { text: "JSON.stringify", correct: true  },
            { text: "JSON.string", correct: false },
            { text: "JSON.dif", correct: false },
        ]
    },
    {
        question: "What characters signifies an array?",
        answer: [
            { text: "[]", correct: true },
            { text: "()", correct: false },
            { text: """", correct: false },
            { text: "{}", correct: false },
        ]
    },

]