// Para que al apretar un enlace de seccion en el navbar, aparezca 60px mas arriba del seccion

document.addEventListener('DOMContentLoaded', function () {
    const offset = 60; // Ajusta este valor según la altura de tu navbar
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  });

  //cierra el toggle cuando se aprieta un enlace de seccion en modo celu y tablet
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.list');
    const menuLinks = document.querySelectorAll('.toggle a');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.checked = false; // Desmarca el checkbox
      });
    });
  });
  