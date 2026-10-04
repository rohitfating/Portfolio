const home = document.getElementById('nav-home') ;
const about = document.getElementById('nav-about') ;
const projects = document.getElementById('nav-projects') ;
const contact = document.getElementById('nav-contact') ;


document
  .querySelectorAll('.nav-tabs input[type="radio"][data-target]')
  .forEach((tab) => {
    tab.addEventListener('change', () => {
      if (!tab.checked) return;

      document.getElementById(tab.dataset.target).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });







