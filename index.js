for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", makeSound);
}

document.addEventListener("keypress", makeSound);


function clicked(){
  makeSound();
  buttonAnimation();
}

function makeSound() {

console.log(event.key);
  switch (this.innerHTML || event.key) {

    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;
    default:
      console.log();
  }

  buttonAnimation();
}


function buttonAnimation() {
  var ckey = this.innerHTML || event.key;
  var activeButton = document.querySelector("." + ckey);
  // console.log(ckey);
  activeButton.classList.toggle("pressed");
  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  }, 100);
}
