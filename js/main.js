$(document).ready(function () {
  $('body').addClass('loading');

  // Preload de imágenes manual
  const imagesToPreload = [
    'assets/bg2.jpg'
  ];

  let loadedCount = 0;

  function imageLoaded() {
    loadedCount++;
    if (loadedCount === imagesToPreload.length) {
      $('body').removeClass('loading');
      $('#preloader').fadeOut(500, function () {
        animateOnScroll(); // trigger primera animación
      });
    }
  }

  // Cargar imágenes
  $.each(imagesToPreload, function (i, src) {
    const img = new Image();
    img.onload = imageLoaded;
    img.onerror = imageLoaded;
    img.src = src;
  });

  // Smooth scroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 800);
    }
  });

  // Animaciones al hacer scroll
  function animateOnScroll() {
    $('.fade-in, .zoom-in, .fade-left').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const windowTop = $(window).scrollTop();
      const windowBottom = windowTop + $(window).height();

      if (elementBottom >= windowTop && elementTop <= windowBottom) {
        $(this).addClass('visible');
      }
    });

    $('.stagger-container').each(function () {
      const containerTop = $(this).offset().top;
      const windowBottom = $(window).scrollTop() + $(window).height();

      if (containerTop < windowBottom) {
        $(this).find('.stagger').each(function (i) {
          const el = $(this);
          setTimeout(function () {
            el.addClass('visible');
          }, i * 150);
        });
      }
    });
  }

  $(window).on('scroll resize', animateOnScroll);
});
