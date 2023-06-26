var buttonColor = ["red", "blue", "green", "yellow"];
var gamePattern=["red"];
var UserClickedPattern=[];


function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChoosenColour = buttonColor[randomNumber];
    gamePattern.push(randomChoosenColour);
    
  $("#"+randomChoosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  
 var audio = new Audio("sounds/" + randomChoosenColour + ".mp3");
  audio.play();
}
$(".btn").click(function(){
    var userChoosenColour= $(this).attr("id");
    UserClickedPattern.push(userChoosenColour);
    playSound(randomChoosenColor);

})
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
      }, 100);


}

nextSequence();
  


