let start_button = document.getElementsByClassName("play_button")[0];
let game_div = document.getElementsByClassName("game")[0];
let game_name = document.getElementsByClassName("game_name")[0];
let game_running_sound = new Audio("files/game_running.wav");
start_button.addEventListener("click", () => {
  game_name.classList.add("margin");
  start_button.classList.add("inactive");
  game_div.classList.add("active");
  setTimeout(() => {
    setInterval(() => {
      game_running_sound.play();
    });
  }, 700);
});

let game_button = document.getElementsByTagName("button");
let player_score_box = document.getElementsByClassName("player_score_box")[0];
let computer_score_box =
  document.getElementsByClassName("computer_score_box")[0];
let computer_hand = document.getElementsByClassName("computer_hand")[0];
let player_hand = document.getElementsByClassName("player_hand")[0];
let computer_score = 0;
let player_score = 0;
let won_sound = new Audio("files/won.wav");
let lost_sound = new Audio("files/lost.wav");
let tie_sound = new Audio("files/tie.wav");

setTimeout(() => {}, 3);
game_button = Array.from(game_button);
for (let i = 0; i < game_button.length; i++) {
  let button = game_button[i];
  button.addEventListener("click", () => {
    player_hand.style.animation = "shake_effect 0.5s ease";
    computer_hand.style.animation = "shake_effect 0.5s ease";
    player_hand.addEventListener("animationend", () => {
      player_hand.style.animation = "";
      computer_hand.style.animation = "";
    });
    setTimeout(() => {
      let player_choice = button.innerHTML;
      let game_result = result(player_choice);
      if (game_result == true) {
        player_score++;
        game_name.innerHTML = "Player Wins";
        player_score_box.innerHTML = player_score;
        won_sound.play();
      } else if (game_result == "Tie") {
        game_name.innerHTML = "It's a Tie";
        tie_sound.play();
      } else {
        computer_score++;
        game_name.innerHTML = "Computer Wins";
        computer_score_box.innerHTML = computer_score;
        lost_sound.play();
      }
    }, 200);
  });
}
let result = (player_choice) => {
  let rps = ["Rock", "Paper", "Scissors"];
  let index = Math.floor(Math.random() * 3);
  let computer_choice = rps[index];
  console.log(computer_choice);
  computer_hand.src = `files/${computer_choice}.png`;
  player_hand.src = `files/${player_choice}.png`;

  if (player_choice == computer_choice) {
    return "Tie";
  } else if (player_choice == "Rock") {
    if (computer_choice == "Paper") {
      return false;
    } else {
      return true;
    }
  } else if (player_choice == "Paper") {
    if (computer_choice == "Rock") {
      return true;
    } else {
      return false;
    }
  } else if (player_choice == "Scissors") {
    if (computer_choice == "Paper") {
      return true;
    } else {
      return false;
    }
  } else {
    return "Tie";
  }
};
