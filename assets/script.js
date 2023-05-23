var gameBoard = document.getElementById("gameBoard");
var startBtn = document.getElementById("startBtn");
var question = document.getElementById("askAway");
var rules = document.getElementById("rules");
var ans1 = document.getElementById("ans1");
var ans2 = document.getElementById("ans2");
var ans3 = document.getElementById("ans3");
var ans4 = document.getElementById("ans4");
var answerButtons = document.getElementById("answerButtons");
var next = document.getElementById("next");
const highScores = document.getElementById("highScore");
var secondsSection = document.getElementsByClassName("seconds")[0];
var score = 0;
var questionCount = 0;


// starts the game and presents 1st question
startBtn.addEventListener("click", function () {
    gameBoard.style.display = "block";
    startBtn.style.display = "none";
    rules.style.display = "none";
    nextQuestion(0);
});

function nextQuestion(questionCount) {
    // gameBoard. = "";
    question.textContent = questions[questionCount].question;
    ans1.textContent = questions[questionCount].options[0];
    ans2.textContent = questions[questionCount].options[1];
    ans3.textContent = questions[questionCount].options[2];
    ans4.textContent = questions[questionCount].options[3];
};

// allows next question to display
next.addEventListener("click", function () {
    questionCount++;
    if (questionCount < questions.length) {
        nextQuestion(questionCount);
    }
    else {
        next.textContent = "Game Over";
        gameBoard.style.display = "none";
    }
});



// questions
var questions = [
    {
        question: "What does % sign signify in javascript?",
        answer: "Remainder",
        options: [
            "Division",
            "Percentage",
            "Remainder",
            "Output"
        ]
    },
    {
        question: "What statement ends a function in javascript?",
        answer: "Return",
        options: [
            "Console.log",
            "Continue",
            "Break",
            "Return"
        ]
    },
    {
        question: "Which statement converts JSON objects into a string?",
        answer: "JSON.stringify",
        options: [
            "JSON.parse",
            "JSON.stringify",
            "JSON.string",
            "JSON.dif"
        ]
    },
    {
        question: "What characters signifies an array?",
        answer: "[]",
        options: [
            "[]",
            "()",
            "''",
            "{}"
        ]
    }

];
