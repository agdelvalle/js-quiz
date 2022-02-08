const getFinalScore = localStorage.getItem('finalScore')
const showScore = document.querySelector('.score')
const getUser = document.querySelector('#inputName')
const saveBtn = document.querySelector('.save-btn')

showScore.innerText = getFinalScore;

// localStorage.setItem("highScores", JSON.stringify([]))

const highScores = JSON.parse(localStorage.getItem("highScores")) || {};

getUser.addEventListener('keyup', () => {
    saveBtn.disabled = !getUser.value;
})

const saveHighScore = (e) => {
    e.preventDefault();

    const saveScore = {
        user: getUser.value,
        score: getFinalScore
    }

    highScores.push(saveScore);
    highScores.sort((a,b) => b.score - a.score)
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/")
    console.log(highScores)

}