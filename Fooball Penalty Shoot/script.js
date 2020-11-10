let score = [0, 1]

var team1 = {
    name: "Manchester United",
    goals: [],
    score: 0
}

var team2 = {
    name: "FC Barcelona",
    goals: [],
    score: 0
}

var turn;


window.onload = () => {
    selectTrun();  
    updateButton(); 
    updateScore();
    updateRuns();
}



function selectTrun() {
    turn = Math.round(Math.random()) + 1;
}


function updateButton() {
    var button = document.getElementById("goal-button");
    var result = document.getElementById("final-result");

    result.style.visibility = "";

    button.textContent = `${turn === 1 ? team1.name : team2.name} Hit`

    if (team1.goals.length == 6 && team2.goals.length == 6) {
        button.remove();

        result.textContent = team1.score === team2.score ? 'It is draw' : team1.score > team2.score ? team1.name + " Wins" : team2.name + " Wins"
    }
    else {
        turn = team1.goals.length === 6 ? 2 : team2.goals.length === 6 ? 1 : turn;
    }
}


function updateScore() {

    document.getElementById("team-1-goals").textContent = team1.score;
    document.getElementById("team-2-goals").textContent = team2.score;
}

function handleGoalButton() {

    var goals = score[Math.round(Math.random())];
    goals = goals === 5 ? 'W' : goals


    if (turn === 1) {
        team1.goals.push(goals)
        team1.score = calculateScore(team1.goals)
        console.log(team1.score)
    }
    else {
        team2.goals.push(goals)
        team2.score = calculateScore(team2.goals)
        console.log(team1.score)
    }
    updateButton();
    updateRuns()
    updateScore()
}

var goal;
var calculateScore = (goals) => {
    return goals.map((goal) => {
        return goal == 'W' ? 0 : goal;
    }
    ).reduce((total, goals) => total + goals)
}

updateRuns = () => {
    var teamOneRoundElement = document.getElementById("team-1-round-goals").children;
    var teamTwoRoundElement = document.getElementById("team-2-round-goals").children;
    team1.goals.forEach((goal, index) => {
        console.log('goal 1 : ' + goal);
        console.log('i : ' + index);
    
        if(goal===1){
            teamOneRoundElement[index].style.background = 'green';
        } else {
            teamOneRoundElement[index].style.background = 'red';
        }
    })
    team2.goals.forEach((goal, index) => {
    
        if(goal===1){
            teamTwoRoundElement[index].style.background = 'green';
        } else {
            teamTwoRoundElement[index].style.background = 'red';
        }
    })
}
