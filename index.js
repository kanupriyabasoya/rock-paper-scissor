//computer choice
function computerChoice(){
const computerChoiceArray=['rock','paper','scissor'];
const computerHand = document.querySelector('.computer-hand');
const randomValue = Math.floor(Math.random() * 3);
if(randomValue){
    computerHand.src = `./assets/${computerChoiceArray[randomValue]}.png`;
}
}
//player choice
function playerChoice(value){
    const playerHand = document.querySelector('.player-hand');
    const options = Array.from(document.querySelectorAll('.options>*'));
    options.forEach(option=>{
        option.addEventListener('click',function(){
            playerHand.src = `./assets/${this.textContent}.png`;
        })
    });
}
