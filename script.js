

function menu() {
    document.addEventListener('DOMContentLoaded', () => {
      const menuButton = document.querySelector('#menu');
      const hiddenMenu = document.querySelector('#hiddenmenu');
      const closeButton = document.querySelector('#menu2'); // Use a descriptive ID
  
      const toggleMenu = () => {
        hiddenMenu.classList.toggle('open');
      };
  
      menuButton.addEventListener('click', toggleMenu);
      closeButton.addEventListener('click', toggleMenu); // Toggle on both button clicks
    });
  }
  
  menu();
  

  var type = new Typed(".automove", {
    strings: ['Designer', 'Developer', 'Programmer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  })