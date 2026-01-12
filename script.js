const btn   = document.getElementById('showBtn');
const wrapper = document.getElementById('menuWrapper');
const music = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');

btn.addEventListener('click', () => {
  wrapper.classList.remove('hidden');
  btn.style.display = 'none';
});

let isPlaying = true;
toggle.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    toggle.textContent = '🔇';
  } else {
    music.play();
    toggle.textContent = '🔊';
  }
  isPlaying = !isPlaying;

});
