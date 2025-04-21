(() => {
  const track = document.querySelector('.main-carousel-track');
  const dotsContainer = document.querySelector('.carousel-dots');
  if (!track || !dotsContainer) return;

  const slides = Array.from(track.children);
  const slideCount = slides.length;

  // 最初のスライドを末尾にクローン追加
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  const allSlides = Array.from(track.children); // クローン含めて再取得
  const slideWidth = slides[0].getBoundingClientRect().width;

  let currentIndex = 0;

  // トラックの幅を調整（横並び用）
  track.style.width = `${slideWidth * allSlides.length}px`;

  // 初期位置セット
  track.style.transform = `translateX(0px)`;

  // ドット生成（クローンは除く）
  slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
    dotsContainer.appendChild(dot);
  });

  const dots = Array.from(dotsContainer.children);

  function goToSlide(index) {
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * index}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    if (index < dots.length) {
      dots[index].classList.add('active');
    }

    currentIndex = index;
  }

  function nextSlide() {
    currentIndex++;
    track.style.transition = 'transform 0.6s ease-in-out';
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

    // ドット更新
    dots.forEach(dot => dot.classList.remove('active'));
    if (currentIndex < dots.length) {
      dots[currentIndex].classList.add('active');
    }

    // 最後のスライドの後（クローン）まで来たら、本物の最初へジャンプ
    if (currentIndex === slideCount) {
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        currentIndex = 0;

        // ドットもリセット
        dots.forEach(dot => dot.classList.remove('active'));
        dots[0].classList.add('active');
      }, 600); // transition時間と一致
    }
  }

  setInterval(nextSlide, 4000);
})();
