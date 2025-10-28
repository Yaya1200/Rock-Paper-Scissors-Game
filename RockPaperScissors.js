
   let score =  JSON.parse(localStorage.getItem('score2')) || {
    win:0, 
    loss:0,
    tie:0

   }
   document.querySelector('.js-rock-button').addEventListener('click', () =>{
    game('rock')
   });
   document.querySelector('.js-paper-button').addEventListener('click', () =>{
    game('paper')
   });
   document.querySelector('.js-scissors-button').addEventListener('click', () =>{
    game('scissors')
   });
  document.body.addEventListener('keydown', (event) =>{
    if(event.key === 'r'){
      game('rock');
    }
    else if(event.key === 'p'){
    game('paper');
    }
    else if(event.key === 's'){
      game('scissors');
    }
   
    
   })
function game(personchoice,){
    const value = Math.random();
    let computerchoice = '';
    if(value >0 && value <= 1/3){
    computerchoice = 'rock'
    }
    else if (value > 1/3 && value<= 2/3){
     computerchoice = 'paper'
    }
    else if (value > 2/3 && value <= 1){
      computerchoice = 'scissors'}
      let result = '';
      if(personchoice === 'rock'){
        if(computerchoice === 'rock'){
          result = 'Tie.'
        }
        else if(computerchoice === 'paper'){
          result = 'You loss.';
        }
        else if(computerchoice === 'scissors'){
          result = 'You win.';
        }

      }
      else if(personchoice === 'paper'){
        if(computerchoice === 'rock'){
          result = 'You win.'
        }
        else if(computerchoice === 'paper'){
          result = 'Tie.';
        }
        else if(computerchoice === 'scissors'){
          result = 'You loss.';
        }

      }
      else if(personchoice === 'scissors'){
        if(computerchoice === 'rock'){
          result = 'You loss.'
        }
        else if(computerchoice === 'paper'){
          result = 'You win.';
        }
        else if(computerchoice === 'scissors'){
          result = 'Tie.';
        }}
      
      if(result=== 'You win.'){
        score.win += 1
      }
      else if(result === 'You loss.'){
        score.loss += 1
      }
      else if(result === 'Tie.'){
        score.tie += 1
      }
      let score1 = JSON.stringify(score)
      localStorage.setItem('score2', score1);
     
       document.getElementById('game4').innerHTML = result
       document.getElementById('game1').innerHTML =  `  You  <img class="you" src="${personchoice}.png">  <img class="you1" src="${computerchoice}.png"> Computer`     
        document.getElementById('game3').innerHTML = `wins: ${score.win} . losses:${score.loss}.  ties:${score.tie}`
    
    }
   
    
   
 
  
  