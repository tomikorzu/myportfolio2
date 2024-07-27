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
// JavaScript para cambiar entre español e inglés
function toggleLanguage() {
    var currentLang = document.documentElement.lang;

    // Si el idioma actual es español, cambia a inglés
    if (currentLang === 'es') {
        document.documentElement.lang = 'en';
        // Oculta los elementos en español y muestra los elementos en inglés
        document.querySelectorAll('[data-lang="es"]').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('[data-lang="en"]').forEach(function(el) {
            el.style.display = 'block';
        });
        // Cambia el texto del botón a 'ES'
        document.getElementById('language-toggle').textContent = 'ES';
    } else {
        // Si el idioma actual no es español (suponemos que es inglés), cambia a español
        document.documentElement.lang = 'es';
        // Oculta los elementos en inglés y muestra los elementos en español
        document.querySelectorAll('[data-lang="en"]').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('[data-lang="es"]').forEach(function(el) {
            el.style.display = 'block';
        });
        // Cambia el texto del botón a 'EN'
        document.getElementById('language-toggle').textContent = 'EN';
    }
}

//Contacto
document.querySelector('.form-footer').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.send("service_vczqhc8", "template_8pukp7d", {
    from_name: document.getElementById('name-footer').value,
    from_email: document.getElementById('email-footer').value,
    subject: document.getElementById('asunto-footer').value,
    message: document.getElementById('message-footer').value,
  })
  .then(function(response) {
    alert('Mensaje enviado correctamente');
    document.querySelector('.form-footer').reset();
  }, function(error) {
    console.error('Error al enviar el mensaje:', error);
    alert('Error al enviar el mensaje');
  });
});