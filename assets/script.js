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
var timer;
var timerCount = 60;
var finalTimer = 0;
var submit = document.getElementById("submit");
var clear = document.getElementById("clear")
var link = document.getElementById("link");
var timerDisplay= document.getElementById("timer")

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
    },
    {
        question: "How do you display items saved in localStorage?",
        answer: "getItem()",
        options: [
            "setItem()",
            "console.log",
            "getItem()",
            "return"
        ]
    }

];

function begin() {
    gameBoard.style.display = "block";
    startBtn.style.display = "none";
    rules.style.display = "none";
    link.style.display = "none";
    nextQuestion(0);
    startTimer();
}

function disableAnswers() {
    ans1.disabled = true;
    ans2.disabled = true;
    ans3.disabled = true;
    ans4.disabled = true;
    next.disabled = false;
}

function enableAnswers() {
    ans1.disabled = false;
    ans2.disabled = false;
    ans3.disabled = false;
    ans4.disabled = false;
    next.disabled = true;
}
// starts the game and presents 1st question
startBtn.addEventListener("click", begin);

function nextQuestion(questionCount) {
    // gameBoard. = "";
    enableAnswers();
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
        ans1.style.backgroundColor = "white";
        ans2.style.backgroundColor = "white";
        ans3.style.backgroundColor = "white";
        ans4.style.backgroundColor = "white";
        ans1.style.color = "black";
        ans2.style.color = "black";
        ans3.style.color = "black";
        ans4.style.color = "black";
    }
    else {
        // to get actual time taken instead of time remaining.
        finalTimer = 60 - timerCount;
        clearInterval(timer);
        endGame();
    }
});

function checkAnswer() {
    var userSelection = this.textContent;
    this.style.color = "white";
    var correctAnswer = questions[questionCount].answer;
    if (userSelection == correctAnswer) {
        score++;
        this.style.backgroundColor = "green";
    }
    else {
        // decrease timer
        timerCount -= 10;
        this.style.backgroundColor = "red";
    }
    disableAnswers();
}

ans1.addEventListener("click", checkAnswer);
ans2.addEventListener("click", checkAnswer);
ans3.addEventListener("click", checkAnswer);
ans4.addEventListener("click", checkAnswer);

function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        secondsSection.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(timer);
            secondsSection.textContent = 0; // Don't show negative time, set time remaining to zero
            finalTimer = 60;
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameBoard.style.display = "none";
    timerDisplay.style.display = "none";
    document.getElementsByClassName("resultBox")[0].style.display = "block";
    document.getElementById("displayTime").textContent = "Time To Complete: " + finalTimer + " seconds"; 
}

submit.addEventListener("click", function () {
    var winnerName = document.getElementById("initials").value;
    // clears input box of initials. Was showing up when using back button.
    document.getElementById("initials").value = "";
    let results = {
        name: winnerName,
        time: finalTimer
    }
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(results);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    location.assign("./leaderboard.html");
});