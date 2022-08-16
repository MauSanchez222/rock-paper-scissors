const choices = ['rock', 'paper', 'scissors'];
let computerSelection;
let playerSelection;
let playerWins = 0;
let computerWins = 0;
let tiedGames = 0;

function getComputerChoice(choices){
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock'){
        switch (computerSelection){
            case 'paper': computerWins++;
                          return 'You lose';
                          break;
            case 'scissors': playerWins++;
                             return 'You win';
                             break;
            default:      tiedGames++;
                          return 'It\'s a tie'
        }
    }
    else if (playerSelection === 'paper'){
        switch (computerSelection){
            case 'scissors': computerWins++;
                             return 'You lose';
                             break;
            case 'rock': playerWins++;
                         return 'You win';
                         break;
            default:     tiedGames++;
                         return 'It\'s a tie'
        }
    }
        else{
            switch (computerSelection){
                case 'rock': computerWins++;
                             return 'You lose';
                             break;
                case 'paper': playerWins++; 
                              return 'You win';
                              break;
                default:     tiedGames++;
                             return 'It\'s a tie'
            }
        }
    }
    
function showResult(){
    console.log('Your choice: ' + playerSelection + ' Computer\'s choice: ' + computerSelection);
    console.log('Score: Player ' + playerWins + ' Computer ' + computerWins + ' Ties: ' + tiedGames)
}

function game(){
    for (let games = 5; games > 0; games--){
        playerSelection = prompt('What will your play be?').toLowerCase();
        computerSelection = getComputerChoice(choices);
        playRound(playerSelection,computerSelection);
        showResult();
    }
    playerWins > computerWins ? console.log('You win') : computerWins > playerWins ? console.log('You lose') : console.log('Tied match')
}

game();