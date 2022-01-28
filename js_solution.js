var game = false;
var title_msg = document.getElementById("title");
var level_count = 1;
var green = document.getElementById("green");
var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var blue = document.getElementById("blue");
var container = document.getElementsByClassName("container");
var colors = [green, red, yellow, blue];
var pattern = [];
// Audio
var green_audio = new Audio("./sounds/green.mp3");
var red_audio = new Audio("./sounds/red.mp3");
var yellow_audio = new Audio("./sounds/yellow.mp3");
var blue_audio = new Audio("./sounds/blue.mp3");
var lost_audio = new Audio("./sounds/wrong.mp3");

// ------------ Start on keydown ------------------
document.addEventListener("keydown", function (event) {
  if (event.key && game == false) {
    title_msg.innerHTML = "Level " + level_count;
    game = true;
    PatternFunction();
  }
});

//------- Pattern Creator -------------------------
function PatternFunction() {
  var random_number = Math.floor(Math.random() * 4);
  colors[random_number].classList.add("pressed");
  if (colors[random_number] == green) {
    green_audio.play();
  } else if (colors[random_number] == red) {
    red_audio.play();
  } else if (colors[random_number] == yellow) {
    yellow_audio.play();
  } else {
    blue_audio.play();
  }
  pattern.push(colors[random_number]);
  setTimeout(function () {
    colors[random_number].classList.remove("pressed");
  }, 150);
  container[0].addEventListener("click", GameFunction);
}

// ----------- In Game Function ----------------
var counter = 0;
function GameFunction(event) {
  if (event.srcElement.id == pattern[counter].id) {
    if (counter == pattern.length - 1) {
      level_count += 1;
      title_msg.innerHTML = "Level " + level_count;
      setTimeout(function () {
        PatternFunction();
      }, 1000);

      counter = 0;
    } else {
      counter++;
    }
  } else {
    lost_audio.play();
    document.getElementsByTagName("body").classList.add("game-over");
    alert("You Lost!");
    window.location.reload();
  }
}

// -----------On click functions for each button-------
green.addEventListener("click", function () {
  green.classList.add("pressed");
  green_audio.play();
  setTimeout(function () {
    green.classList.remove("pressed");
  }, 150);
});
red.addEventListener("click", function () {
  red.classList.add("pressed");
  red_audio.play();
  setTimeout(function () {
    red.classList.remove("pressed");
  }, 150);
});
yellow.addEventListener("click", function () {
  yellow.classList.add("pressed");
  yellow_audio.play();
  setTimeout(function () {
    yellow.classList.remove("pressed");
  }, 150);
});
blue.addEventListener("click", function () {
  blue.classList.add("pressed");
  blue_audio.play();
  setTimeout(function () {
    blue.classList.remove("pressed");
  }, 150);
});
