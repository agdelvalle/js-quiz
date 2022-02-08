const highScoresList = JSON.parse(localStorage.getItem('highScores')) || []
const displayhighScoresList = document.querySelector(".high-scores-container")

displayhighScoresList.innerHTML = `<tr>
<th>Name</th>
<th>Score</th>
</tr>` +
highScoresList.map((record) => {
    return(`<tr><td>${record.user}</td><td>${record.score}</td></tr>`)
}).join("")