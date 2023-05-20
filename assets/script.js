var gameBoard = document.getElementById("gameBoard");
var beginButton = document.getElementById("button")


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

const question = [
    {
        question: "What does % sign signify in javascript?",
        answer: [
            { text: "Division", correct: false },
            { text: "Percentage", correct: false },
            { text: "Remainder", correct: true },
            { text: "Output", correct: false },
        ]
    }
]