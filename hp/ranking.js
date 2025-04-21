document.addEventListener('DOMContentLoaded', () => {
  const tracks = document.querySelectorAll('.ranking-track');
  if (!tracks.length) return;

  tracks.forEach(track => {
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);
  });
});

