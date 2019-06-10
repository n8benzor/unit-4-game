// Document.ready function
$(document).ready(function() {
    
    
// Variables to store data
    let wins = 0;
    let losses = 0;
    let counter = 0;




// Randomly generated numbers for the crystals and the number to reach
    let randomNumber = Math.floor(Math.random() * 100) + 20;
    let crystalOne = Math.floor(Math.random() * 12 + 1);
    let crystalTwo = Math.floor(Math.random() * 12 + 1);
    let crystalThree = Math.floor(Math.random() * 12 + 1);
    let crystalFour = Math.floor(Math.random() * 12 + 1);

    console.log(randomNumber);
    console.log( crystalOne, crystalTwo, crystalThree, crystalFour);
    
    $('#random-number').text(randomNumber);



// function that will generate random numbers for each crystal when the game is won or lost
    function newGame() {
    randomNumber = Math.floor(Math.random() * 100) + 20;
    crystalOne = Math.floor(Math.random() * 12 + 1);
    crystalTwo = Math.floor(Math.random() * 12 + 1);
    crystalThree = Math.floor(Math.random() * 12 + 1);
    crystalFour = Math.floor(Math.random() * 12 + 1);
    counter = 0;
    console.log(randomNumber);
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour);
    }



// Click events for the crystal images
    $('#image-1').on('click', function(){
    console.log(crystalOne);
    counter += crystalOne;
    $('#score-box').html(counter);
    if (counter === randomNumber){
        youWin();
    }
    else if (counter > randomNumber){
        youLose();
    }
    });

    $('#image-2').on('click', function(){
    console.log(crystalTwo);
    counter += crystalTwo;
    $('#score-box').html(counter);
    if (counter === randomNumber){
        youWin();
    }
    else if (counter > randomNumber){
        youLose();
    }
    });

    $('#image-3').on('click', function(){
    console.log(crystalThree);
    counter += crystalThree;
    $('#score-box').html(counter);
    if (counter === randomNumber){
        youWin();
    }
    else if (counter > randomNumber){
        youLose();
    }
    });

    $('#image-4').on('click', function(){
    console.log(crystalFour);
    counter += crystalFour;
    $('#score-box').html(counter);
    if (counter === randomNumber){
        youWin();
    }
    else if (counter > randomNumber){
        youLose();
    }
    });

    


// Function for winning
    function youWin(){
    wins++;
    $('#wins').text('Wins: ' + wins);
    newGame();
    $('#random-number').text(randomNumber);
}

// Function for losing
    function youLose(){
    losses++;
    $('#loss').text('Losses: ' + losses);
    newGame();
    $('#random-number').text(randomNumber);
}


});