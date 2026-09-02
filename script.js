const audio = document.getElementById("audio");
const playBtn = document.getElementById("playBtn");
const vinyl = document.getElementById("vinyl");

let playing = false;

playBtn.addEventListener("click", () => {
  if (!playing) {
    audio.play();
    vinyl.classList.add("spin");
    playBtn.textContent = "❚❚";
  } else {
    audio.pause();
    vinyl.classList.remove("spin");
    playBtn.textContent = "▶";
  }
  playing = !playing;
});