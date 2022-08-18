const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(choices){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper': 
                computerWins++;
                break;
            case 'scissors': 
                playerWins++;
                break;
            default:      
                break;
        }
    }
    else if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'scissors': 
                computerWins++;
                break;
            case 'rock': 
                playerWins++;
                break;
            default:     
        }
    }
        else{
            switch (computerSelection){
                case 'rock': 
                    computerWins++;
                    break;
                case 'paper': 
                    playerWins++; 
                    break;
                default:     
                    tiedGames++;
            }
        }
    }


function showScores(){
    document.getElementById('pscore').innerHTML = playerWins;
    document.getElementById('oscore').innerHTML = computerWins;
}

function opponentsPlay(computerSelection){
    switch(computerSelection){
        case 'rock':
            document.getElementById('opponent-played').innerHTML = '<img src="./images/rock.jpg">';
            break;
        case 'paper':
            document.getElementById('opponent-played').innerHTML = '<img src="./images/paper.jpg">';
            break;
        case 'scissors':
            document.getElementById('opponent-played').innerHTML = '<img src="./images/scissors.jpg">';
            break;
    }
}

function restartGame(){
    playerWins = 0;
    computerWins = 0;
    showScores();
}

function gameEnd(){
    if(playerWins === 5){
        window.alert('You won!');
        restartGame(); 
    }
    else if (computerWins === 5){
        window.alert('You lost');
        restartGame(); 
    }
}

function playHand(){
    computerSelection = getComputerChoice(choices);
    opponentsPlay(computerSelection);
    playRound(playerSelection, computerSelection);
    showScores();
    gameEnd();
};

const cardRock = document.getElementById('card-rock');
const cardPaper = document.getElementById('card-paper');
const cardScissors = document.getElementById('card-scissors');

cardRock.addEventListener('click', () => {
    document.getElementById('player-played').innerHTML = '<img src="./images/rock.jpg">';
    playerSelection = 'rock';
    playHand();
});
    

cardPaper.addEventListener('click', () => {
    document.getElementById('player-played').innerHTML = '<img src="./images/paper.jpg">';
    playerSelection = 'paper';
    playHand();
});

cardScissors.addEventListener('click', () => {
    document.getElementById('player-played').innerHTML = '<img src="./images/scissors.jpg">';
    playerSelection = 'scissors';
    playHand();
});

