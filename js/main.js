$(document).ready(function () {
  // Scroll suave al hacer clic en anclas
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 800);
    }
  });

  // Animación al aparecer en pantalla
  function animateOnScroll() {
    $('.fade-in').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const windowTop = $(window).scrollTop();
      const windowBottom = windowTop + $(window).height();

      if (elementBottom >= windowTop && elementTop <= windowBottom) {
        $(this).addClass('visible');
      }
    });
  }

  $(window).on('scroll resize', animateOnScroll);
  $(window).trigger('scroll');
});
