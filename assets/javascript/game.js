// Global variables declaration
var  crystalScore = {
    blueVal: 0,
    redVal: 0,
    greenVal: 0,
    yellowVal: 0,
    images: ["./images/red.png","abvakfh"]
};
    var addedScore = 0;
    var wins = 0;
    var losses = 0;
    var randomTotal = 0;
    var gameOver = false;

$( document ).ready(function() {
  
    // function declaration for play the game self-note: remember to recall first at bottm to start the game
    function playGame(){
      addedScore = 0;
        gameOver = false;
    
//Random numbers assignment for the game
 //using the  Math.floor(Math.random() * (max - min + 1)) + min inclusive both (max and min)
// radnom sum for the game
randomTotal= Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//Assigning random values to each crystal 
 crystalScore.blueVal = Math.floor(Math.random() * 12) + 1;
crystalScore.redVal = Math.floor(Math.random() * 12) + 1;
crystalScore.greenVal =Math.floor(Math.random() * 12) + 1;
crystalScore.yellowVal = Math.floor(Math.random() * 12) + 1;
$("#Wins").text(wins);
$("#Losses").text(losses);
$("#total-random").text (randomTotal);
$("#added-score").text(addedScore);
      }

// on-click functions for the four crystal. Self-note: if have more time left, find a way to make a funciton to simplify this code

$("#red").on ("click",function(){
    if (gameOver !== true){
        addedScore += crystalScore.redVal ;
       numberCheck();
        $("#added-score").text(addedScore);
    }
});
$("#blue").on ("click",function(){
    if (gameOver !== true){
        addedScore += crystalScore.blueVal ;
       numberCheck();
        $("#added-score").text(addedScore);
    }
});
$("#green").on ("click",function(){
    if (gameOver !== true){
        addedScore += crystalScore.greenVal ;
       numberCheck();
        $("#added-score").text(addedScore);
    }
});
$("#yellow").on ("click",function(){
    if (gameOver !== true){
        addedScore += crystalScore.yellowVal ;
        numberCheck();
        $("#added-score").text(addedScore);
    }
});


// function to check the number of the two scores to determine the outcome of user's performance
function numberCheck(){
    if (addedScore == randomTotal){
        wins++;
        $("Wins").text(wins);
        alert("Congraduations! You won!");
        gameOver = true;
      
    }	
     else if (addedScore > randomTotal){
            losses++;
            $("Losses").text(losses);
            alert("Woops! You lost! Please try again!");
            gameOver = true;
        };
        if (gameOver== true){
			$("#win").html(wins);
			$("#loss").html(losses);
			playGame();
		}
}
// Recall the belowing function to start the game
playGame();


});// the .reday close line