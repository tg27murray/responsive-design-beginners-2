// Your code here

const overlay = document.getElementById('overlay');
const menuTopNav = document.getElementById('menuTopNav');

const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');
const breakpoint = window.matchMedia('(width < 43.5em)');

const setupNTopNav = () => {
  if (breakpoint.matches == true) {
    console.log('Mobile device');
    menuTopNav.setAttribute('inert', '');
  } else {
    console.log('Non-mobile device');
    menuTopNav.removeAttribute('inert');
  }
  // if ()
};

setupNTopNav();

breakpoint.addEventListener('change', () => {
  console.log('breakpoint crossed');
  setupNTopNav();
});

// console.log(breakpoint);

function openMobileMenu() {
  console.log('opening mobile menu');
  btnOpen.setAttribute('aria-expanded', 'true');
  main.setAttribute('iniert', '');
  footer.setAttribute('inert', '');

  menuTopNav.removeAttribute('inert');
  menuTopNav.style.transitionDuration = '400ms';
  overlay.style.transitionDuration = '400ms';
  bodyScrollLock.disableBodyScroll(menuTopNav);
  btnClose.focus();
}

function closeMobileMenu() {
  console.log('closing mobile menu');
  btnOpen.setAttribute('aria-expanded', 'false');
  main.removeAttribute('inert');
  footer.removeAttribute('inert');

  menuTopNav.setAttribute('inert', '');
  bodyScrollLock.enableBodyScroll(menuTopNav);

  btnOpen.focus();

  setTimeout(() => {
    menuTopNav.removeAttribute('style');
    overlay.removeAttribute('style');
  }, 500);
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);
