let humanImage = document.querySelector('.human-image')
let computerImage = document.querySelector('.computer-image')

let humanScore = 0
let computerScore = 0

let playButton = document.querySelector('#play')

playButton.addEventListener('click', () => {
    let playerChoice = getPlayerChoice()
    let computerChoice = getComputerChoice()

    
    let winner = chooseWinner()


})

function render() {

}

function chooseWinner(playerChoice, computerChoice) {
    if(playerChoice === computerChoice) return 'tie'
    if(playerChoice === 'rock' && computerChoice === 'paper'){
        return 'computer'
    } else if(playerChoice === 'rock' && computerChoice === 'scissors'){
        return 'player'
    } else if(playerChoice === 'paper' && computerChoice === 'rock'){
        return 'player'
    } else if(playerChoice === 'paper' && computerChoice === 'scissors'){
        return 'computer'
    } else if(playerChoice === 'scissors' && computerChoice === 'paper'){
        return 'player'
    }else if(playerChoice === 'scissors' && computerChoice === 'rock'){
        return 'computer'
    }

}

function getPlayerChoice() {
    if(document.querySelector('scissors-choice').checked){
        return 'scissors'
    }
    if(document.querySelector('rock-choice').checked){
        return 'rock'
    }
    if(document.querySelector('paper-choice').checked){
        return 'paper'
    }
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    if(rand === 0) return 'rock'
    if(rand === 1) return 'paper'
    if(rand === 2) return 'scissors'
}