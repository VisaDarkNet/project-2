const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body')

burger.addEventListener('click', function () {
  this.classList.toggle('active');
  menuList.classList.toggle('menu__list--active');
  body.classList.toggle('lock');

});


const menuLinkEls = document.querySelectorAll('.menu__link');

menuLinkEls.forEach(menuLinkEl => {
  menuLinkEl.addEventListener('click', () => {
    burger.classList.remove('active');
    menuList.classList.remove('menu__list--active');
    body.classList.remove('lock');
  });
});
// не сообразил что написать чтоб исчезало в инете нашел как сделать эктив а как чтоб отменить не понял пытался просто добовалять как в бургере классы не че не получилось))


$(document).ready(function () {
  $(".menu__link,.header__link,.logo").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 75;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});


const headerEl = document.querySelector('.header__top');

window.addEventListener('scroll', function () {
  const scrollPos = this.window.scrollY

  if (scrollPos > 80) {
    headerEl.classList.add('header__top--fixced');
  } else {
    headerEl.classList.remove('header__top--fixced');
  }
});


var mixer = mixitup('.works__content');























