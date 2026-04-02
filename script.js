function toggleService(card) {
    const isActive = card.classList.contains('active');

  // סגור את כל הכרטיסיות
document.querySelectorAll('.service-card')
.forEach(c => c.classList.remove('active'));

// פתח את זו שנלחצה (אם לא הייתה פתוחה)
if (!isActive) {
    card.classList.add('active');
}
}