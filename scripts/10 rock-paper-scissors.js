let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
    total: 0,
}

document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties} <br>Total Game: ${score.total}</br>`;

function resetScore(){
    score.wins = 0;
    score.losses = 0;
    score.ties =0;
    score.total =0;
    localStorage.removeItem('score');
    updateScoreElement();
}
function playGame(playerMove){
    computerMove = pickComputerMove();
    let result = '';
    score.total += 1;
    if (computerMove === playerMove){
        result = 'Tie.';
    } else if (
        (computerMove === 'paper' && playerMove === 'rock') || (computerMove === 'rock' && playerMove === 'scissors') || (computerMove === 'scissors' && playerMove === 'paper') 
    ){
        result = 'You Lose.';
    } else {
        result = 'You Win.';
    }

    if(result === 'Tie.'){
        score.ties +=1;
    } else if(result === 'You Lose.'){
        score.losses +=1;
    } else {
        score.wins += 1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    
    document.querySelector('.js-result')
    .innerHTML = `${result}`
    
    document.querySelector('.js-moves')
    .innerHTML = `				You 
<img class = 'move-icon' src = "images/${playerMove}-emoji.png"> 
<img class = 'move-icon' src="images/${computerMove}-emoji.png"> Computer.`

    updateScoreElement();
    


    // resultString = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}\n` + resultString);
    // return resultString

}

function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}, <br>Total Game: ${score.total}</br>`;
}


function pickComputerMove(){
    const randNumber = Math.random();
    let computerMove = '';
    if(randNumber >=0 && randNumber < 1/3){
        computerMove = 'rock';
    } else if (randNumber >= 1/3 && randNumber < 2/3){
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }
    return computerMove
}