//opacity class added when let's play is clicked and game board shows
const playButton = document.querySelector('.welcome-text button');
const welcomeText = document.querySelector('.welcome-text');
const gameBoard = document.querySelector('.game-board');
playButton.addEventListener('click',()=>{
    welcomeText.classList.add('opacity-zero');
    gameBoard.classList.add('opacity-one');
})

//variables for score
let pScore = 0;
let cScore = 0;
//function to change score on score board
const valueScore = () =>{
    let playerScore = document.querySelector('.player-score span');
    let computerScore = document.querySelector('.computer-score span');
    playerScore.textContent = pScore; 
    computerScore.textContent = cScore; 
 }
 //game starts

const game = () =>{
    
    const display = document.querySelector('.game-board p');
    const options = Array.from(document.querySelectorAll('.options'));
    let playerHand = document.querySelector('.player-hand');
    let computerHand = document.querySelector('.computer-hand');
  
//eventlistener added to options and user clicks an option --1) random value for computer is generated -- 2)computer choice and clicked values are compared and scores, p are updated accordingly --3) valueScore() is called
    options.map((option) => {
        option.addEventListener('click', e => {

            let pChoice = e.target.textContent;
            let choiceArray = ['rock','paper','scissor'];
            let randomValue = Math.floor(Math.random() * 3);
            let computerChoice = choiceArray[randomValue];
        
            if(pChoice == computerChoice){
                display.textContent = 'tie!!!';
                
            }else if(pChoice == 'rock' && computerChoice=='scissor'){
                display.textContent = 'winner';
                pScore++;
                valueScore();
                
            }else if(pChoice == 'scissor' && computerChoice == 'paper'){
                display.textContent= 'winner';
                pScore++;
                valueScore();
                
            }else if (pChoice == 'paper' && computerChoice == 'rock'){
                display.textContent = 'winner'
                pScore++;
                valueScore();
                
            }else {
                display.textContent = 'loser';
                cScore++;
                valueScore();
                
            }
            //images are changed inside setTimout as we don't want them to change before the click event happens and comparison taked place
            setTimeout(()=>{
                playerHand.src = `./assets/${pChoice}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            })

            });
           
        })
      
     return;
    };

game();
 


