// main j

function toggleService(card) {
    const isActive = card.classList.contains('active');

    document.querySelectorAll('.service-card')
            .forEach(c => c.classList.remove('active'));

    if (!isActive) {
        card.classList.add('active');
    }
}