window.addEventListener('scroll', function() {
  var nav = document.querySelector('.container_nav');
  var linkPro = document.querySelector('.link_pro');
  var btnRegister = document.querySelector('.btn_register_sticky');
  var logoLaposteSticky = document.querySelector('.logo_laposte_sticky');
  var logoLaposte = document.querySelector('.logo_laposte');
  var lidentiteNumeriqueBleu = document.querySelector('.box_nav_logo_middle');

  var boxNavLogoLeft = document.querySelector('.box_nav_logo_left');
  var boxNavRight = document.querySelector('.box_nav_right');
  var containerNav = document.querySelector('.container_nav');
  var navContainer = document.querySelector('.nav-container');
  var boxNavLogoMiddle = document.querySelector('.box_nav_logo_middle');
  

  if (window.pageYOffset > 100) {
    nav.classList.add('sticky');
    logoLaposteSticky.classList.add('enable');
    logoLaposte.classList.add('disable');
    btnRegister.classList.add('enable');
    lidentiteNumeriqueBleu.classList.add('disable');
    linkPro.classList.add('disable');


    boxNavLogoLeft.style.width = 'auto';
    boxNavRight.style.width = 'auto';
    navContainer.style.width = 'auto';
    navContainer.style.padding = '0';

    // Déplacer navContainer avant boxNavRight
boxNavRight.parentNode.insertBefore(navContainer, boxNavRight);

// Déplacer boxNavLogoLeft avant navContainer
navContainer.parentNode.insertBefore(boxNavLogoLeft, navContainer);


  } else {
    nav.classList.remove('sticky');
    logoLaposteSticky.classList.remove('enable');
    logoLaposte.classList.remove('disable');
    btnRegister.classList.remove('enable');
    lidentiteNumeriqueBleu.classList.remove('disable');
    linkPro.classList.remove('disable');

    boxNavLogoLeft.style.removeProperty('width');
    boxNavRight.style.removeProperty('width');
    navContainer.style.removeProperty('width');
    navContainer.style.removeProperty('padding');

    containerNav.appendChild(boxNavLogoLeft);
    containerNav.appendChild(boxNavLogoMiddle);
    containerNav.appendChild(boxNavRight);
    containerNav.appendChild(navContainer);
  }
});