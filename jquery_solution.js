var game = false;
var title_msg = $("#title");
var level_count = 1;
var green = $("#green");
var red = $("#red");
var yellow = $("#yellow");
var blue = $("#blue");
var container = $(".container");
var colors = [green, red, yellow, blue];
var pattern = [];
// Audio
var green_audio = new Audio("./sounds/green.mp3");
var red_audio = new Audio("./sounds/red.mp3");
var yellow_audio = new Audio("./sounds/yellow.mp3");
var blue_audio = new Audio("./sounds/blue.mp3");
var lost_audio = new Audio("./sounds/wrong.mp3");

// ------------ Start on keydown ------------------
$(document).on("keydown", function (event) {
  if (event.key && game == false) {
    title_msg.innerHTML = "Level " + level_count;
    game = true;
    PatternFunction();
  }
});

//------- Pattern Creator -------------------------
function PatternFunction() {
  var random_number = Math.floor(Math.random() * 4);
  colors[random_number].addClass("pressed");
  if (colors[random_number] == green) {
    green_audio.play();
  } else if (colors[random_number] == red) {
    red_audio.play();
  } else if (colors[random_number] == yellow) {
    yellow_audio.play();
  } else {
    blue_audio.play();
  }
  pattern.push(colors[random_number][0]);
  setTimeout(function () {
    colors[random_number].removeClass("pressed");
  }, 150);
  container[0].addEventListener("click", GameFunction); // i have a question
}

// ----------- In Game Function ----------------
var counter = 0;
function GameFunction(event) {
  if (event.target.id == pattern[counter].id) {
    if (counter == pattern.length - 1) {
      counter = 0;
      level_count += 1;
      title_msg.innerHTML = "Level " + level_count;
      setTimeout(function () {
        PatternFunction();
      }, 1000);
    } else {
      counter++;
    }
  } else {
    lost_audio.play();
    $("body").addClass("game-over");
    alert("You Lost!");
    window.location.reload();
  }
}

// -----------On click functions for each button-------
green.on("click", function () {
  green.addClass("pressed");
  green_audio.play();
  setTimeout(function () {
    green.removeClass("pressed");
  }, 150);
});
red.on("click", function () {
  red.addClass("pressed");
  red_audio.play();
  setTimeout(function () {
    red.removeClass("pressed");
  }, 150);
});
yellow.on("click", function () {
  yellow.addClass("pressed");
  yellow_audio.play();
  setTimeout(function () {
    yellow.removeClass("pressed");
  }, 150);
});
blue.on("click", function () {
  blue.addClass("pressed");
  blue_audio.play();
  setTimeout(function () {
    blue.removeClass("pressed");
  }, 150);
});
