const tabs = document.querySelectorAll('.ranking-category p');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // タブの active を切り替え
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // コンテンツの表示切り替え
    const target = tab.getAttribute('data-tab');
    contents.forEach(content => {
      if (content.getAttribute('data-content') === target) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const rankingPhotoWrappers = document.querySelectorAll('.rankingphoto-wrapper');

  rankingPhotoWrappers.forEach(wrapper => {
    const track = wrapper.querySelector('.ranking-track');
    const clone = track.cloneNode(true);
    track.parentElement.appendChild(clone);

    const rankingPhoto = wrapper.querySelector('.rankingphoto');
    const leftBtn = wrapper.querySelector('.arrow.left');
    const rightBtn = wrapper.querySelector('.arrow.right');

    let scrollInterval;
    let pauseTimeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        rankingPhoto.scrollLeft += 1;
        if (rankingPhoto.scrollLeft >= track.scrollWidth) {
          rankingPhoto.scrollLeft = 0;
        }
      }, 20);
    };

    const pauseAutoScroll = () => {
      clearInterval(scrollInterval);
      clearTimeout(pauseTimeout);
      pauseTimeout = setTimeout(() => {
        startAutoScroll();
      }, 5000);
    };

    startAutoScroll();

    leftBtn.addEventListener('click', () => {
      rankingPhoto.scrollBy({ left: -200, behavior: 'smooth' });
      pauseAutoScroll();
    });

    rightBtn.addEventListener('click', () => {
      rankingPhoto.scrollBy({ left: 200, behavior: 'smooth' });
      pauseAutoScroll();
    });
  });
});
