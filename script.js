document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      slidesPerView: 1,
      mousewheel: {
        invert: true
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  });

const boutons = [...document.querySelectorAll('button')];
const navigator = document.querySelector('.navigator');
const body = document.querySelector('body');
const effet = document.querySelector('.effet'); 
const csimple = document.querySelector('.cases');
const psimple = document.querySelector('.psimple');
const pdouble = document.querySelector('.pdouble');
const b1 = document.querySelector('#bo1');
const b2 = document.querySelector('#bo2');
const b3 = document.querySelector('#bo3');
const bt1 = document.querySelector('#bot1');
const bt2 = document.querySelector('#bot2');
const bt3 = document.querySelector('#bot3');

csimple.classList.add('active');
b1.classList.add('buttonactive');
bt1.classList.add('buttonactive');

body.addEventListener('mouseover', (e) => {
  if (e.target.classList[0]==='navcon' || e.target.classList[0]==='effet' || e.target.classList[0]==='vouton' || e.target.classList[0]==='navigator' ){
    navigator.style.left = '20px';
    effet.style.width = '16vw';
  } else{
    navigator.style.left = '-11.4vw';
    effet.style.width = '20vw';
  }
})

boutons.forEach(bouton => {
    bouton.addEventListener('click', (e) => {
      let value = e.target.id;
      switch (value) {
        case 'bo1':
          b1.classList.add('buttonactive');
          b2.classList.remove('buttonactive');
          b3.classList.remove('buttonactive');

          bt1.classList.add('buttonactive');
          bt2.classList.remove('buttonactive');
          bt3.classList.remove('buttonactive');

          csimple.classList.add('active');
          psimple.classList.remove('active');
          pdouble.classList.remove('active');
          break;
        case 'bo2':
          b1.classList.remove('buttonactive');
          b2.classList.add('buttonactive');
          b3.classList.remove('buttonactive');

          bt1.classList.remove('buttonactive');
          bt2.classList.add('buttonactive');
          bt3.classList.remove('buttonactive');

          csimple.classList.remove('active');
          psimple.classList.add('active');
          pdouble.classList.remove('active');
          break;
        case 'bo3':
          b1.classList.remove('buttonactive');
          b2.classList.remove('buttonactive');
          b3.classList.add('buttonactive');

          bt1.classList.remove('buttonactive');
          bt2.classList.remove('buttonactive');
          bt3.classList.add('buttonactive');

          pdouble.classList.add('active');
          csimple.classList.remove('active');
          psimple.classList.remove('active');
          break;
      }
    });
});

boutons.forEach(bouton => {
  bouton.addEventListener('click', (e) => {
    let value = e.target.id;
    switch (value) {
      case 'bot1':
        b1.classList.add('buttonactive');
        b2.classList.remove('buttonactive');
        b3.classList.remove('buttonactive');

        bt1.classList.add('buttonactive');
        bt2.classList.remove('buttonactive');
        bt3.classList.remove('buttonactive');
        
        csimple.classList.add('active');
        psimple.classList.remove('active');
        pdouble.classList.remove('active');
        break;
      case 'bot2':
        b1.classList.remove('buttonactive');
        b2.classList.add('buttonactive');
        b3.classList.remove('buttonactive');

        bt1.classList.remove('buttonactive');
        bt2.classList.add('buttonactive');
        bt3.classList.remove('buttonactive');

        csimple.classList.remove('active');
        psimple.classList.add('active');
        pdouble.classList.remove('active');
        break;
      case 'bot3':
        b1.classList.remove('buttonactive');
        b2.classList.remove('buttonactive');
        b3.classList.add('buttonactive');

        bt1.classList.remove('buttonactive');
        bt2.classList.remove('buttonactive');
        bt3.classList.add('buttonactive');

        csimple.classList.remove('active');
        psimple.classList.remove('active');
        pdouble.classList.add('active');
        break;
    }
  });
});

const containermenu = document.querySelector('.containermenu');
const menu = document.querySelector('.menu');
const ouvimg = document.querySelector('.ouvimg');

let bol = true;

body.addEventListener('click', (e) => {
  if (bol === true && (e.target.classList[0] === 'ouvimg')) {
    containermenu.classList.add('containermenuactive');
    containermenu.style.visibility = 'visible';
    containermenu.style.animation = 'fade-in 0.2s ease-in-out forwards';
    menu.style.animation = 'zoom-in 0.2s ease-in-out forwards';
  }
  else if (bol === false && (e.target.classList[0] === 'containermenu' || e.target.classList[0] === 'ouvimg')) {
    containermenu.classList.remove('containermenuactive');
    containermenu.style.visibility = 'hidden';
    containermenu.style.animation = 'fade-out 0.2s ease-in-out forwards';
    menu.style.animation = 'zoom-out 0.2s ease-in-out forwards';
  }
  bol = !bol;
})