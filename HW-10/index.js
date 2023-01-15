const letters = document.querySelectorAll(".key");
[...letters].forEach((letter) => {
  letter.addEventListener("mousedown", function () {
    const audio = new Audio();
    audio.src = `sounds/${letter.id}.mp3`;
    audio.play();
    letter.classList.add("playing");
  });
});

[...letters].forEach((letter) => {
  letter.addEventListener("mouseup", function () {
    letter.classList.remove("playing");
  });
});

document.addEventListener("keydown", (event) => {
  const letter = document.getElementById(`${event.keyCode}`);
  if (letter) {
    const audio = new Audio();
    audio.src = `sounds/${letter.id}.mp3`;
    audio.play();
    letter.classList.add("playing");
  }
});

document.addEventListener("keyup", (event) => {
  const letter = document.getElementById(`${event.keyCode}`);
  if (letter) {
    letter.classList.remove("playing");
  }
});
