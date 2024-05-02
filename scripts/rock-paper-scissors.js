
      let score = JSON.parse(localStorage.getItem('score')) ||  {
              draw : 0,
              losses : 0,
              wins : 0
            };
            updateScore();
        function playGame(playerMove){
          const computerMove = pickComputerMove();
          let result = '';

          if(playerMove === 'paper'){
            if(computerMove === 'paper'){
              result = 'It is Tie.';
            }
            else if(computerMove === 'rock'){
              result = 'You Win.';
            }
            else if (computerMove === 'scissors'){
              result = 'You Lose.';
            }
        }
        
         else if(playerMove === 'scissors'){
            if(computerMove === 'scissors'){
              result = 'It is Tie.';
            }
            else if(computerMove === 'rock'){
              result = 'You Lose.';
            }
            else if (computerMove === 'paper'){
              result = 'You Win.';
            }
           
        }
        
        else if(playerMove === 'rock'){
          if(computerMove === 'rock'){
            result = 'It is Tie.';
          }
          else if(computerMove === 'paper'){
            result = 'You Lose.';
          }
          else if (computerMove === 'scissors'){
            result = 'You Win.';
          }
        }

        if(result === 'It is Tie.' ){
            score.draw++;
          }
          else if(result ==='You Lose.' ){
            score.losses++;
          }
          else if(result ==='You Win.' ){
            score.wins++;
          } 
          localStorage.setItem('score', JSON.stringify(score))
          
          updateScore();
          document.querySelector('.js-result').innerHTML = result;
          document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="game-button/${playerMove}-emoji.png" alt="img">
      Computer <img class="move-icon" src="game-button/${computerMove}-emoji.png" alt="img">`;
          
      }
      function updateScore(){
        document.querySelector('.js-score')
            .innerHTML = `Wins: ${score.wins} Draws: ${score.draw} Losses: ${score.losses}`;
            
      }
      function showMoves(){
        document.querySelector('.show-moves').innerHTML = ` You Picked ${playerMove}, Computer Picks ${computerMove}`;
      }
     
        function pickComputerMove(){
          randomNumber = Math.random();
          let computerMove = "";
          
            if(randomNumber >= 0 && randomNumber < 1/3){
              computerMove = 'rock';
            }
            else if(randomNumber >= 1/3 && randomNumber < 2/3){
              computerMove = 'paper';
            }
            else if(randomNumber >= 2/3 && randomNumber < 1){
              computerMove = 'scissors';
            }
            return computerMove;
        }