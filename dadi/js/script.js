/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const start = document.getElementById('start');

start.addEventListener('click', function(){
    
    const numUser = Math.floor(Math.random() * 6) +1;
    const numBot = Math.floor(Math.random() * 6) +1;

    if(numUser > numBot){
        document.querySelector('.result').innerHTML = 'hai vinto';
    } else if (numUser == numBot) {
        document.querySelector('.result').innerHTML = 'pareggio';
    } else {
        document.querySelector('.result').innerHTML = 'hai perso';
    }

    document.querySelector('.num-user').innerHTML = numUser;
    document.querySelector('.num-bot').innerHTML = numBot;
})