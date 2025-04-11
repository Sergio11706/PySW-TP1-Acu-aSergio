document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 16ms per frame
                
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += step;
                        counter.querySelector('.number').textContent = Math.floor(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.querySelector('.number').textContent = target;
                    }
                };
                
                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of element is visible
    });

    counters.forEach(counter => observer.observe(counter));
});
