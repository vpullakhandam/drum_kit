function playSound(event) {
  const audio = document.querySelector(`audio[data-key="${event.key}"]`);
  const key = document.querySelector(`.key[data-key="${event.key}"]`);
  if (!audio) return;
  audio.currentTime = 0; // rewind to the start
  audio.play();
  // adding the playing class
  key.classList.add("playing");
}
function removeTransition(event) {
  if (event.propertyName != "transform") return; // if property is not transform, then return. if it is transform, that means the property belongs to all the keys.
  this.classList.remove("playing");
  // removing the playing class
}
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
