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
  

  // Obtener todos los enlaces de navegación
const navLinks = document.querySelectorAll('.nav-activate');

// Función para verificar qué sección está visible y aplicar la clase active
function highlightNavLink() {
    navLinks.forEach(link => {
        const sectionId = link.getAttribute('href').slice(1); // Obtener el id de la sección
        const section = document.getElementById(sectionId); // Obtener la sección correspondiente

        // Verificar si la sección está visible en la pantalla
        if (isElementVisible(section)) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Función para verificar si un elemento está visible en la pantalla
function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Escuchar el evento scroll para llamar a highlightNavLink()
window.addEventListener('scroll', highlightNavLink);

// Llamar a highlightNavLink() una vez al cargar la página para establecer el estado inicial
highlightNavLink();


//Language selector 
let currentLanguage = 'es';

    function toggleLanguage() {
        currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
        document.getElementById('language-toggle').innerText = currentLanguage.toUpperCase();

        const elementsEs = document.querySelectorAll('[data-lang="es"]');
        const elementsEn = document.querySelectorAll('[data-lang="en"]');

        if (currentLanguage === 'es') {
            elementsEs.forEach(el => el.style.display = 'block');
            elementsEn.forEach(el => el.style.display = 'none');
        } else {
            elementsEs.forEach(el => el.style.display = 'none');
            elementsEn.forEach(el => el.style.display = 'block');
        }
    }

    // Función para verificar si un elemento es visible
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para manejar el scroll
    function onScroll() {
        const sections = document.querySelectorAll('.scroll-animation');
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
    }

    // Agrega el evento de scroll
    window.addEventListener('scroll', onScroll);

    // Ejecuta la función al cargar la página
    onScroll();