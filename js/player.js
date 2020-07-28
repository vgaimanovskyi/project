function btnPlay() {
    document.getElementById("player").play();
    document.getElementsByClassName("player-controls__play")[0].classList.add("hide");
    document.getElementsByClassName("player-controls__pause")[0].classList.remove("hide");
};
function btnPause() {
    document.getElementById("player").pause();
    document.getElementsByClassName("player-controls__pause")[0].classList.add("hide");
    document.getElementsByClassName("player-controls__play")[0].classList.remove("hide");
};