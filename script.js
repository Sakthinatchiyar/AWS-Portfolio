
document.addEventListener('DOMContentLoaded', () => {
    const badges = document.querySelectorAll('.badge-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    badges.forEach(badge => {
        badge.style.opacity = 0;
        badge.style.transform = 'translateY(20px)';
        badge.style.transition = 'all 0.6s ease-out';
        observer.observe(badge);
    });
});