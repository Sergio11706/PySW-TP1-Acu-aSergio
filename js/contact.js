// Función para validar el formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('confirmationModal');
    const closeBtn = document.querySelector('.close-modal');
    const submitBtn = form.querySelector('.submit-btn');
    const spinner = submitBtn.querySelector('.spinner');
    const buttonText = submitBtn.querySelector('.button-text');

    // Validación en tiempo real
    form.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', function() {
            if (this.validity.valid) {
                this.classList.remove('invalid');
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
                this.classList.add('invalid');
            }
        });
    });

    // Manejo del envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar spinner y ocultar texto del botón
        spinner.style.display = 'block';
        buttonText.style.display = 'none';
        
        // Simular envío del formulario
        setTimeout(() => {
            // Mostrar modal de confirmación
            modal.style.display = 'flex';
            
            // Restablecer spinner y texto del botón
            spinner.style.display = 'none';
            buttonText.style.display = 'block';
            
            // Limpiar el formulario
            form.reset();
        }, 1500);
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Cerrar modal al presionar Escape
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
        }
    });
});
