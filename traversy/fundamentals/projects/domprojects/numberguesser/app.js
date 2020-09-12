let min = 1, max =10, winningNum = getRandomNum(min, max), guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//assign ui min andmax
minNum.textContent = min;
maxNum.textContent = max;


//play agaian
game.addEventListener('mousedown', function(e)
    {
        if(e.target.className === 'play-again')
            window.location.reload();
    });

//listen for guess
guessBtn.addEventListener('click', function()
    {
        let guess = parseInt(guessInput.value);
        //validatew
        if(isNaN(guess) || guess < min || guess > max)
            setMessage(`please enter a valid number between ${min} and ${max}`, 'red');
        //chekc if won
        if(guess === winningNum)
        {
            gameOver(true, `${winningNum} is correct, you win`);
        }

        else
        {
            guessesLeft -=1;
        if(guessesLeft === 0)
        {
            gameOver(false, `game over. correct number was ${winningNum}`);
        }
        else
        {
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');
        }
        }
    });

function gameOver(won, msg)
{
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    //play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function getRandomNum(min, max)
{
   return Math.floor(Math.random()*(max-min+1) + min);
}
//set msg
function setMessage(msg, color)
{
    message.style.color = color;
    message.textContent = msg;
}
