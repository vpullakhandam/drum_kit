window.addEventListener("keydown", function (event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  if(!audio) return;
  audio.currentTime=0; // rewind to the start
  audio.play();
});
