let humanImage = document.querySelector('.human-image')
let computerImage = document.querySelector('.computer-image')

let playButton = document.querySelector('#play')

function Player(name){
    this.name = name
    this.choice = ''
    this.score = 0
}

let human = new Player('human')
let computer = new Player('computer')

playButton.addEventListener('click', (e) => {
    e.preventDefault()
    human.choice = getPlayerChoice()
    computer.choice = getComputerChoice()
    let winner = chooseWinner(human.choice, computer.choice)
    console.log(winner)
    switch(human.choice){
        case 'rock':
            humanImage.src = 'rock.png'
            break
        case 'paper':
            humanImage.src = 'paper.png'
            break
        case 'scissors':
            humanImage.src = 'scissors.png'
    }
    switch(computer.choice){
        case 'rock':
            computerImage.src = 'rock.png'
            break
        case 'paper':
            computerImage.src = 'paper.png'
            break
        case 'scissors':
            computerImage.src = 'scissors.png'
    }
    if(winner === 'human'){
        document.querySelector('.winner').innerHTML='Human won!'
    } else if(winner === 'computer'){
        document.querySelector('.winner').innerHTML='Computer Won!'
    } else if (winner === 'tie'){
        document.querySelector('.winner').innerHTML='Its a tie!'
    }
    document.querySelector('.human-score').innerHTML = human.score
    document.querySelector('.computer-score').innerHTML = computer.score
    
    
})



function render() {

}

function chooseWinner() {
    if(human.choice === computer.choice) return 'tie'
    if(human.choice === 'rock' && computer.choice === 'paper'){
        computer.score++
        return 'computer'
    }else if(human.choice === 'rock' && computer.choice === 'scissors'){
        human.score++
        return 'human'
    }else if(human.choice === 'paper' && computer.choice === 'rock'){
        human.score++
        return 'human'
    }else if(human.choice === 'paper' && computer.choice === 'scissors'){
        computer.score++
        return 'computer'
    }else if(human.choice === 'scissors' && computer.choice === 'rock'){
        computer.score++
        return 'computer'
    }else if(human.choice === 'scissors' && computer.choice === 'paper'){
        human.score++
        return 'human'
    }
}   

function getPlayerChoice() {
    if(document.querySelector('#scissors-choice').checked){
        return 'scissors'
    }
    if(document.querySelector('#rock-choice').checked){
        return 'rock'
    }
    if(document.querySelector('#paper-choice').checked){
        return 'paper'
    }
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    if(rand === 0) return 'rock'
    if(rand === 1) return 'paper'
    if(rand === 2) return 'scissors'
}