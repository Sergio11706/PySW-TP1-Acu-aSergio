// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para agregar la clase visible a un elemento
function revealElement(element) {
    element.classList.add('visible');
}

// Función para manejar el scroll
function handleScroll() {
    const comentarios = document.querySelectorAll('.comentario');
    
    comentarios.forEach(comentario => {
        if (isInViewport(comentario) && !comentario.classList.contains('visible')) {
            revealElement(comentario);
        }
    });
}

// Inicializar la animación para los elementos visibles al cargar la página
window.addEventListener('load', () => {
    const comentarios = document.querySelectorAll('.comentario');
    comentarios.forEach(comentario => {
        if (isInViewport(comentario)) {
            revealElement(comentario);
        }
    });
});

// Escuchar el evento de scroll
window.addEventListener('scroll', handleScroll);

// Limpiar el listener cuando no sea necesario
window.addEventListener('beforeunload', () => {
    window.removeEventListener('scroll', handleScroll);
});
