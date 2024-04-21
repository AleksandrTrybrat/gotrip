// Импортируем ScrollTrigger из GSAP
const { ScrollTrigger } = window;
gsap.registerPlugin(ScrollTrigger);

export const animationExplore = gsap
  .timeline()
  .fromTo(
    '.explore__leftBlock',
    { x: -1500 },
    { x: 0, duration: 2, ease: 'power2.inOut', overwrite: 'auto' },
  )
  .fromTo(
    '.explore__rightBlock',
    { x: 1500 },
    { x: 0, duration: 2, ease: 'power2.inOut', overwrite: 'auto' },
    '<',
  ); // '<' указывает, что анимация должна начаться сразу после предыдущей

// Создаем анимацию
export const animationDestination = gsap.fromTo(
  '.destinations__box',
  {
    opacity: 0,
    y: -300, // Смещение сверху до начала анимации
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.5, // Длительность анимации
    ease: 'power2.out', // Эффект анимации
    scrollTrigger: {
      trigger: '.destinations__box', // Элемент, когда начинается анимация
      start: 'top 80%', // Начало анимации при прокрутке до верха 80% высоты окна
      end: 'bottom 20%', // Конец анимации при прокрутке до низа 20% высоты окна
      scrub: true, // Связываем анимацию с прокруткой
      once: true, // Анимация сработает только один раз
    },
  },
);

// Опционально, чтобы анимация запустилась сразу при загрузке страницы
animationDestination.play();

export const animationAbout = gsap.timeline({
  scrollTrigger: {
    trigger: '.about__content',
    scrub: true,
    once: true,
  },
});

animationAbout
  .fromTo(
    '.about__section-left',
    { x: -1500 },
    { x: 0, duration: 2, ease: 'power2.inOut', overwrite: 'auto' },
  )
  .fromTo(
    '.about__section-right',
    { x: 1500 },
    { x: 0, duration: 1.5, ease: 'power2.inOut', overwrite: 'auto' },
  )
  .to(
    ' .about__section-right',
    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
    '-=1', // Начать этот твин за 1.5 секунды до завершения предыдущего
  );

// Опционально, чтобы анимация запустилась сразу при загрузке страницы
animationAbout.play();

export const started = document.querySelectorAll('.started');

started.forEach((starting) => {
  gsap.fromTo(
    starting,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: starting,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true,
        once: true,
      },
    },
  );
});
