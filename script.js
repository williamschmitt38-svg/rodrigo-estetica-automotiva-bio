// Jerson Bio - reveal + smooth scroll + toast
const toast = document.getElementById('toast');
function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3200);
}
function smoothScrollTo(id) {
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
const locBtn = document.getElementById('locBtn');
if (locBtn) {
    locBtn.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScrollTo('#localizacao');
    });
}
const hoursBtn = document.getElementById('hoursBtn');
if (hoursBtn) {
    hoursBtn.addEventListener('click', () => smoothScrollTo('#horarios'));
}
const revealElements = document.querySelectorAll('.action-btn, .vitrine-card, .hours-card, .map-card');
revealElements.forEach(el => el.classList.add('reveal'));
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
revealElements.forEach(el => revealObserver.observe(el));
