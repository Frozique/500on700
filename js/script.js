const accSingleTriggers = document.querySelectorAll(".accordion-header");

accSingleTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleAccordion)
);

function toggleAccordion() {
  const items = document.querySelectorAll(".accordion-item");
  const thisItem = this.parentNode;

  items.forEach((item) => {
    if (thisItem == item) {
      thisItem.classList.toggle("active");
      return;
    }
    item.classList.remove("active");
  });
}

if (window.matchMedia("(min-width: 400px)").matches) {

  document.querySelectorAll('.nav__list>.list-item').forEach(e => {
    e.addEventListener('click', function() {
      e.style.borderBottom = '3px solid white'
      const id = e.dataset.id;
      const ddmenu = document.getElementById(`dd-${id}`)
      if(ddmenu) {
        ddmenu.style.display = 'flex'
        ddmenu.addEventListener('mouseleave', function() {
          ddmenu.style.display = 'none'
          e.style.borderBottom = 'none'
          })
      } else e.addEventListener('mouseleave', function() {
        e.style.borderBottom = 'none'
      })
    })
  })

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    width: 1240,



    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


} else {

    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.nav__list');
    let menuLinks = menu.querySelectorAll('.menu');

    burger.addEventListener('click',

      function () {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('nav__list--active');

        document.body.classList.toggle('stop-scroll');
});

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,



    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const mySwiper = new Swiper('.mySwiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 20,
  });


  $('#ddmenu li').hover(function () {
  clearTimeout($.data(this, 'timer'));
  $('ul', this).stop(true, true).slideDown(200);
}, function () {
  $.data(this, 'timer', setTimeout($.proxy(function () {
    $('ul', this).stop(true, true).slideUp(200);
  }, this), 100));
});
}

