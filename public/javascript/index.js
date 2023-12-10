const bannerText = document.getElementById("typing-banner-text");
const mainText = "LA EDUCACIÓN ES LA BASE SOBRE LA QUE CONSTRUIMOS NUESTROS SUEÑOS";
let currentCharIndex = 0;

function typeAndEraseBanner() {
    bannerText.textContent = mainText.substring(0, currentCharIndex);

    if (currentCharIndex < mainText.length) {
        currentCharIndex++;
        setTimeout(typeAndEraseBanner, 100); // Intervalo de escritura
    } else {
        setTimeout(eraseBannerText, 5000); // Borra el texto después de 5 segundos
    }
}

function eraseBannerText() {
    if (currentCharIndex >= 0) {
        bannerText.textContent = mainText.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(eraseBannerText, 50); // Intervalo de borrado
    } else {
        currentCharIndex = 0;
        setTimeout(typeAndEraseBanner, 1000); // Inicia el proceso de escritura después de 1 segundo
    }
}
// Iniciar el efecto al cargar la página
typeAndEraseBanner();



// Esperar a que la página cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Agregar el listener para el evento de scroll
    window.addEventListener('scroll', handleScroll);
});

// Función para verificar si un elemento está en la ventana visible
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la clase de animación cuando la sección "pasos" está en la ventana visible
function handleScroll() {
    var pasosSection = document.getElementById('pasos');
    if (isInViewport(pasosSection)) {
        var pasos = pasosSection.querySelectorAll('.paso');
        pasos.forEach(function(paso) {
            paso.classList.add('animate');
        });
        // Remover el listener después de aplicar la animación una vez
        window.removeEventListener('scroll', handleScroll);
    }
}

// Agregar un listener para el evento de scroll
window.addEventListener('scroll', handleScroll);