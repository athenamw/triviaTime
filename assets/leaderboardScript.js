
var startOver = document.getElementById("startOver");
var clear = document.getElementById("clear");
var tableBody = document.getElementsByTagName("tbody")[0];

// new game
startOver.addEventListener("click", function () {
    location.assign("./index.html");
});

// clear highscores
clear.addEventListener("click", function () {
    localStorage.removeItem("highScores");
    location.reload();
});

// display highscores in a table

window.addEventListener("load", function () {

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    if (highScores.length > 0) {
        // sort high scores
        highScores.sort(function (a, b) {
            return parseInt(a.time) - parseInt(b.time);
        });

        for (let index = 0; index < highScores.length; index++) {
            var names = highScores[index].name;
            var time = highScores[index].time;
            var row = document.createElement('tr');
            var number = document.createElement('th');
            number.textContent = index + 1;
            number.setAttribute("scope", "row");
            var winners = document.createElement('td');
            winners.textContent = names;
            var timer = document.createElement('td');
            timer.textContent = time;
            row.appendChild(number);
            row.appendChild(winners);
            row.appendChild(timer);
            tableBody.appendChild(row);

        };
    };
});
